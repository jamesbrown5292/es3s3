import { ResponsiveBar } from '@nivo/bar'
import emissionsData from './scope3-emissions-data'
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"

const EmissionsData = () => {
    const [state, setState] = useState({})
    
    useEffect(() => {
        axios.get('https://r4vd6siai0.execute-api.us-east-1.amazonaws.com/prod')
          .then((res) => {
          setState(res.data);
          });
      }, []);
    

    const data =  emissionsData.emissionsData.barData;

    const columnHeadersLookup = {
        company: "company",
        industry: "industry",
        scope3_emissions: "1_does_the_company_disclose_scope_3_emissions_outside_of_cdp"
    };

    const buildChart = () => {
        if (state.ResultSet) {
            const oilGasScope3Yes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['scope3_emissions'],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasScope3No = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['scope3_emissions'],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPScope3Yes = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['scope3_emissions'],
                'Yes',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPScope3No = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['scope3_emissions'],
                'No',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      

                return [
                    {
                      indicator: 'Yes',
                      'Oil & Gas': oilGasScope3Yes,
                      'Electric Utility & Power Generators': EUPScope3Yes
                    },
                    {
                      indicator: 'No',
                      'Oil & Gas': oilGasScope3No,
                      'Electric Utility & Power Generators': EUPScope3No
                    }
                  ]
        }
    }

    const APIdata = buildChart()
    if (APIdata) {
        return (
            <div className="graph-container" style={{ width: 550, height: 450, marginLeft: 100, marginTop: 56, marginRight: -150}}>
                <h5>Do companies disclose Scope 3 emissions outside of CDP? By sector.</h5>
                <ResponsiveBar
                    data={APIdata}
                    height={350}
                    width={550}
                    keys={[ 'Oil & Gas', 'Electric Utility & Power Generators']}
                    indexBy="indicator"
                    margin={{ top: 45, right:150, bottom: 50, left: 100 }}
                    padding={0.4}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'category10' }}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    borderRadius={15}
                    enableGridY={false}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 6,
                        tickPadding: 10,
                        tickRotation: 0,
                        legend: 'Industry',
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
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'top-right',
                            direction: 'column',
                            justify: false,
                            translateX: 60,
                            translateY: 0,
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

export default EmissionsData