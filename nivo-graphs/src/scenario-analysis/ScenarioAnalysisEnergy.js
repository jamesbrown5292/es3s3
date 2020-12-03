import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import scenarioAnalysisData from './scenario-analysis-data'

const ScenarioAnalysis = () => {

  let scenarioData =  scenarioAnalysisData.scenarioAnalysisData.pieDataScenarioAnalysis;
  
  return (
    <div style={{ width: 450, height: 400}}>
        <h5>Do Electric, Utility and Power Generating companies use cilmate-related scenario analsysis to inform strategy?</h5>
        <ResponsivePie
              data={scenarioData}
              height={400}
              width={450}
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

export default ScenarioAnalysis