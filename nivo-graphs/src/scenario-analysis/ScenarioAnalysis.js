import { React, useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import scenarioAnalysisData from './scenario-analysis-data'
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"

const ScenarioAnalysis = () => {
  const [state, setState] = useState({})
  
  useEffect(() => {
    axios.get('https://dgqjjumafa.execute-api.us-east-1.amazonaws.com/prod')
      .then((res) => {
        setState(res.data);
      });
  }, []);

  const columnHeadersLookup = {
    company: "company",
    industry: "industry",
    scenario_analysis: "1_does_the_company_use_climate-related_scenario_analysis_to_inform_its_strategy"
  };


  const buildChart = () => {
    if (state.ResultSet) {
      const oilGasYes = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['scenario_analysis'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Oil & Gas')
      const oilGasNo = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['scenario_analysis'],
          'No',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Oil & Gas')
      const EUPYes = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['scenario_analysis'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPNo = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['scenario_analysis'],
          'No',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      

      return [
        {
          "id": "O&G - yes",
          "label": "O&G - yes",
          "value": oilGasYes,
          "color": "hsl(300, 70%, 50%)"
        },
        {
          "id": "O&G - no",
          "label": "O&G - no",
          "value": oilGasNo,
          "color": "hsl(193, 70%, 50%)"
        },
        {
          "id": "EUP - yes",
          "label": "EUP - yes",
          "value": EUPYes,
          "color": "hsl(300, 70%, 50%)"
        },
        {
          "id": "EUP - no",
          "label": "EUP - no",
          "value": EUPNo,
          "color": "hsl(193, 70%, 50%)"
        }
      ]
    }
  }

  const APIdata = buildChart()


  let scenarioData =  scenarioAnalysisData.scenarioAnalysisData.pieDataScenarioAnalysis;
  if (APIdata) {
    return (
      <div className="graph-container" style={{ width: 400, height: 450}}>
          <h5>Do companies use cilmate-related scenario analsysis to inform strategy? By sector</h5>
          <ResponsivePie
                data={APIdata}
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
  } return null;
  
  }

export default ScenarioAnalysis