import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import climateOpportunitiesData from './climate-opportunities-data'

const ClimateOpportunitiesBySector = () => {

  const data =  climateOpportunitiesData.climateOpportunitiesData.barDataOil;
  
  return (
    <div style={{ width: 400, height: 400}}>
           <h5>Do companies identify climate-related opportunities? Comparison by sector.</h5>
        <ResponsiveBar
            data={data}
            height={400}
            width={400}
            keys={[ 'Yes', 'No']}
            indexBy="sector"
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

export default ClimateOpportunitiesBySector