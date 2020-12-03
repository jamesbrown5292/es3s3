import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import climateReportingData from './climate-reporting-data'

const TcfdSignatories = () => {

  let tcfdData =  climateReportingData.tcfdData;
  
  return (
    <div className="graph-container" style={{ width: 500, height: 400}}>
        <h5>Are companies TCFC signatories? Comparison by sector.</h5>
          <ResponsivePie
              data={tcfdData}
              height={400}
              width={600}
              margin={{ top: -50, right:275, bottom: 0, left: 125 }}
              innerRadius={0.2}
              padAngle={0}
              cornerRadius={3}
              colors={{ scheme: 'paired' }}
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

export default TcfdSignatories