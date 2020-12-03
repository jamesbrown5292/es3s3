import { ResponsiveBar } from '@nivo/bar'
import climateGovernanceData from './climate-governance-data'


const ClimateGovernanceBar = () => {


  const climateData =  climateGovernanceData.climateGovernanceData.barData;

  const data = [
    {
      indicator: 'Board level oversight',
      'Oil & Gas': 9,
      'Electric, Utility & Power Generators': 6
    },
    {
      indicator: 'Climate-related performance',
      'Oil & Gas': 12,
      'Electric, Utility & Power Generators': 9
    }
    ]

  return (
    <div style={{ width: 400, height: 400}}>
      <h5>Climate governance arrangements, by sector</h5>
      <ResponsiveBar
          data={data}
          width={400}
          height={400}
          keys={[ 'Oil & Gas', 'Electric, Utility & Power Generators']}
          indexBy="indicator"
          margin={{ top: 50, right: 0, bottom: 50, left: 60 }}
          padding={0.5}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
          borderRadius={15}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 0,
              tickPadding: 0,
              tickRotation: 0,
              legend: 'Governance Arrangements',
              legendPosition: 'middle',
              legendOffset: 30
          }}
          axisLeft={{
              tickSize: 0,
              tickPadding: 0,
              tickRotation: 0,
              legend: 'Number of companies',
              legendPosition: 'middle',
              legendOffset: -30
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
      />

    </div>
  )
};

export default ClimateGovernanceBar