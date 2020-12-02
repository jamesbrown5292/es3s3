import { ResponsiveBar } from '@nivo/bar'
import emissionsData from './scope3-emissions-data'

const EmissionsData = () => {


  const data =  emissionsData.emissionsData.barData;

  return (
    <div class="graph-container">
        <h5>Do companies disclose Scope 3 emissions outsie of CDP?</h5>
        <ResponsiveBar
            data={data}
            keys={[ 'Oil & Gas', 'Electric, Utility, Power']}
            indexBy="response"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
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
        />
    </div>
  )
};

export default EmissionsData