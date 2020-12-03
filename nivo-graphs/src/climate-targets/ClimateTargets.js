import { ResponsiveBar } from '@nivo/bar'
import climateTargetsData from './climate-targets-data'


const ClimateTargets = () => {

  const climateData =  climateTargetsData.climateTargetsData.barData;

  return (
    <div style={{ width: 800, height: 400, marginTop: '4em'}}>
        <h5>Companies' publicly disclosed climate targets. Comparison by sector.</h5>
        <ResponsiveBar
            data={climateData}
            width={650}
            height={400}
            keys={[ 'Oil & Gas - Yes', 'Oil & Gas - No', 'Electric, Utility, Power - Yes', 'Electric, Utility, Power - No']}
            indexBy="target"
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
};

export default ClimateTargets