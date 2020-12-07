import { ResponsiveBar } from '@nivo/bar'
import climateTargetsData from './climate-targets-data'
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"


const ClimateTargets = () => {
    const [state, setState] = useState({});

    useEffect(() => {
        axios.get('https://38podzd2x6.execute-api.us-east-1.amazonaws.com/prod')
          .then((res) => {
          setState(res.data);
          });
      }, []);

    const columnHeadersLookup = {
        company: "company",
        industry: "industry",
        disclose_targets: "1_does_the_company_have_publicly_disclosed_climate_targets",
        net_zero: "1_7_is_the_climate_target_net_zero",
        science_based: "1_8_is_the_climate_target_science_based",
        support_science_based: "2_is_the_company_an_official_supporter_of_science-based_targets_and_if_so_where_are_they_in_their_journey"
    };

    const buildChart = () => {
        if (state.ResultSet) {
            const oilGasTargetsYes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['disclose_targets'],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasTargetsNo = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['disclose_targets'],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPTargetsYes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['disclose_targets'],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPTargetsNo = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['disclose_targets'],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
            
            const oilGasNetZeroYes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup["net_zero"],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasNetZeroNo = chartHelpers.countResponsesByFilter(
                columnHeadersLookup["net_zero"],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPNetZeroYes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup["net_zero"],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPNetZeroNo = chartHelpers.countResponsesByFilter(
                columnHeadersLookup["net_zero"],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
            
            const oilGasScienceBasedYes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['science_based'],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasScienceBasedNo = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['science_based'],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPScienceBasedYes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['science_based'],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPScienceBasedNo = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['science_based'],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
            
            const oilGasSupportScienceBasedYes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['support_science_based'],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasSupportScienceBasedNo = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['support_science_based'],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPSupportScienceBasedYes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['support_science_based'],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPSupportScienceBasedNo = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['support_science_based'],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      

                return [
                    {
                      indicator: 'Publish targets',
                      'Oil & Gas - Yes': oilGasTargetsYes,
                      'Oil & Gas - No': oilGasTargetsNo,
                      'Electric Utility & Power Generators - Yes': EUPTargetsYes,
                      'Electric Utility & Power Generators - No': EUPTargetsNo
                    },
                    {
                      indicator: 'Target is net 0',
                      'Oil & Gas - Yes': oilGasNetZeroYes,
                      'Oil & Gas - No': oilGasNetZeroNo,
                      'Electric Utility & Power Generators - Yes': EUPNetZeroYes,
                      'Electric Utility & Power Generators - No': EUPNetZeroNo
                    },
                    {
                      indicator: 'Science-based target',
                      'Oil & Gas - Yes': oilGasScienceBasedYes,
                      'Oil & Gas - No': oilGasScienceBasedNo,
                      'Electric Utility & Power Generators - Yes': EUPScienceBasedYes,
                      'Electric Utility & Power Generators - No': EUPScienceBasedNo
                    },
                    {
                      indicator: 'Support science-based targets',
                      'Oil & Gas - Yes': oilGasSupportScienceBasedYes,
                      'Oil & Gas - No': oilGasSupportScienceBasedNo,
                      'Electric Utility & Power Generators - Yes': EUPSupportScienceBasedYes,
                      'Electric Utility & Power Generators - No': EUPSupportScienceBasedNo
                    },
                  ]
        }
    }

    const APIdata = buildChart();

    if (APIdata){
        return (
            <div className="graph-container  page-left" style={{ width: 800, height: 450, marginTop: '4em'}}>
                <h5>Companies' publicly disclosed climate targets. Comparison by sector.</h5>
                <ResponsiveBar
                    data={APIdata}
                    width={650}
                    height={400}
                    keys={[ 'Oil & Gas - Yes', 'Oil & Gas - No', 'Electric Utility & Power Generators - Yes', 'Electric Utility & Power Generators - No']}
                    indexBy="indicator"
                    margin={{ top: 30, right: 0, bottom: 100, left: 60 }}
                    padding={0.6}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'paired' }}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    borderRadius={10}
                    enableGridY={false}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 6,
                        tickPadding: 10,
                        tickRotation: 0,
                        legend: 'Targets',
                        legendPosition: 'middle',
                        legendOffset: 40
                    }}
                    axisLeft={{
                        tickSize: 10,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Number of companies',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'top-right',
                            direction: 'column',
                            justify: false,
                            translateX: 30,
                            translateY: 50,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 60,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </div>
        )
    }
    return null;
};

export default ClimateTargets