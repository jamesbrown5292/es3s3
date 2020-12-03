import { ResponsiveBar } from '@nivo/bar'
import climateReportingData from './climate-reporting-data'


const CdpScore = () => {

  const data = climateReportingData.cdpScore

  return (
    <div style={{ width: 500, height: 400, marginLeft: 110}}>
        <h5>Sector comparison of CDP scores</h5>        
        <ResponsiveBar
            data={data}
            height={400}
            width={400}
            keys={[ 'A', 'A-', 'B', 'B-', 'C', 'C-', 'D', 'D-', 'F']}
            indexBy="sector"
            margin={{ top: 50, right: 0, bottom: 50, left: 30 }}
            padding={0.5}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
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
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 60,
                    translateY: 0,
                    itemsSpacing: -30,
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

export default CdpScore