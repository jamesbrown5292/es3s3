import { ResponsiveBar } from '@nivo/bar'
import climateGovernanceData from './climate-governance-data'


const ClimateGovernanceBar = () => {


  const climateData =  climateGovernanceData.climateGovernanceData.barData;
  console.log("climdt", climateData)

  const data = [
    {
      question: 'Board level oversight',
      'Oil & Gas': 9,
      'Electric, Utility & Power Generators': 6
    },
    {
      question: 'Climate-related performance',
      'Oil & Gas': 12,
      'Electric, Utility & Power Generators': 9
    }
]

  return (
  
  <ResponsiveBar
      data={data}
      keys={[ 'Oil & Gas', 'Electric, Utility & Power Generators']}
      indexBy="question"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      // defs={[
      //     {
      //         id: 'dots',
      //         type: 'patternDots',
      //         background: 'inherit',
      //         color: '#38bcb2',
      //         size: 4,
      //         padding: 1,
      //         stagger: true
      //     },
      //     {
      //         id: 'lines',
      //         type: 'patternLines',
      //         background: 'inherit',
      //         color: '#eed312',
      //         rotation: -45,
      //         lineWidth: 6,
      //         spacing: 10
      //     }
      // ]}
      // fill={[
      //     {
      //         match: {
      //             id: 'fries'
      //         },
      //         id: 'dots'
      //     },
      //     {
      //         match: {
      //             id: 'sandwich'
      //         },
      //         id: 'lines'
      //     }
      // ]}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      borderRadius={52}
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
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 50,
              translateY: 0,
              itemsSpacing: 12,
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
  />)
};

export default ClimateGovernanceBar