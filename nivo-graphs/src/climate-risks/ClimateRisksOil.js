import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import climateRisksData from './climate-risks-data'

const ClimateRisks = () => {

  let climateData =  climateRisksData.climateRisksData.pieData;
  
  return (
    <div className="graph-container" style={{ width: 400, height: 450}}>
    <h5>Risks considered to be climate-related - 
        Oil & Gas companies.</h5>
<ResponsivePie
          data={climateData}
          height={400}
          width={400}
          margin={{ top: -50, right:100, bottom: 0, left: 90 }}
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

export default ClimateRisks