import { React, useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import climateOpportunitiesData from './climate-opportunities-data'
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"

const ClimateOpportunitiesBySector = () => {
    const [state, setState] = useState({});

    useEffect(() => {
        axios.get('https://4mny4n5ap1.execute-api.us-east-1.amazonaws.com/prod')
          .then((res) => {
          setState(res.data);
          });
      }, []);

    const columnHeadersLookup = {
        company: "company",
        industry: "industry",
        opportunities: "1_does_the_company_identify_climate-related_opportunities",
    };

    const buildChart = () => {
        if (state.ResultSet) {
          const oilGasOpportunitiesYes = chartHelpers.countResponsesByFilter(
            columnHeadersLookup['opportunities'],
            'Yes',
            state.ResultSet.Rows,
            columnHeadersLookup['industry'], 'Oil & Gas')

          const oilGasOpportunitiesNo = chartHelpers.countResponsesByFilter(
            columnHeadersLookup['opportunities'],
            'No',
            state.ResultSet.Rows,
            columnHeadersLookup['industry'], 'Oil & Gas');

          const EUPOpportunitiesYes = chartHelpers.countResponsesByFilter(
            columnHeadersLookup['opportunities'],
            'Yes',
            state.ResultSet.Rows,
            columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
          const EUPOpportunitiesNo = chartHelpers.countResponsesByFilter(
            columnHeadersLookup['opportunities'],
            'No',
            state.ResultSet.Rows,
            columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
     
            return [
              {
                indicator: 'Yes',
                'Oil & Gas': oilGasOpportunitiesYes,
                'Electric, Utility & Power Generators': EUPOpportunitiesYes
              },
              {
                indicator: 'No',
                'Oil & Gas': oilGasOpportunitiesNo,
                'Electric, Utility & Power Generators': EUPOpportunitiesNo
              }
            ]
        };
      }

    const APIdata = buildChart();

      
    

    const data =  climateOpportunitiesData.climateOpportunitiesData.barDataOil;
      if (APIdata) {
          {console.log("API data is ", APIdata)}
        return (
            <div className="graph-container  page-left" style={{ width: 400, height: 450}}>
                <h5>Do companies identify climate-related opportunities? Comparison by sector.</h5>
                <ResponsiveBar
                    data={APIdata}
                    height={400}
                    width={400}
                    keys={[ 'Oil & Gas', 'Electric, Utility & Power Generators']}
                    indexBy="indicator"
                    margin={{ top: 25, right: 0, bottom: 50, left: 60 }}
                    padding={0.4}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'category10' }}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    borderRadius={45}
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
                            anchor: 'right',
                            direction: 'column',
                            justify: false,
                            translateX: 50,
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
  }

export default ClimateOpportunitiesBySector