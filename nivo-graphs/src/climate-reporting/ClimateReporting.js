import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import climateReportingData from './climate-reporting-data'

const ClimateReporting = () => {

  let climateData =  climateReportingData.climateReportingData;
  
  return (
    <div style={{ width: 600, height: 400}}>
        <h5>Companies' climate reporting arrangements</h5>
          <ResponsivePie
              data={climateData}
              height={400}
              width={600}
              margin={{ top: -0, right:200, bottom: 0, left: 200 }}
              innerRadius={0.2}
              padAngle={0}
              cornerRadius={3}
              colors={{ scheme: 'nivo' }}
              borderWidth={10}
              borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
              radialLabelsSkipAngle={10}
              radialLabelsTextColor="#333333"
              radialLabelsLinkColor={{ from: 'color' }}
              sliceLabelsSkipAngle={0}
              sliceLabelsTextColor="#333333"
          />

        </div>

  )
  }

export default ClimateReporting