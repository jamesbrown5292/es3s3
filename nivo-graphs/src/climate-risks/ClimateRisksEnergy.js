import { React, useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import climateRisksData from './climate-risks-data'
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"

const ClimateRisksEnergy = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get('https://vg38eyegwk.execute-api.us-east-1.amazonaws.com/prod')
      .then((res) => {
        setState(res.data);
      });
  }, []);

  const columnHeadersLookup = {
    company: "company",
    industry: "industry",
    policy_legal: "1_1_policy_&_legal_risk_is_clearly_identified_as_a_climate-related_risk",
    technology_risk: "1_2_technology_risk_is_clearly_identified_as_a_climate-related_risk",
    market_risk: "1_3_market_risk_is_clearly_identified_as_a_climate-related_risk",
    reputation_risk: "1_4_reputation_risk_is_clearly_identified_as_a_climate-related_risk",
    acute_risk: "1_5_acute_risk_is_clearly_identified_as_a_climate-related_risk",
    chronic_risk: "1_6_chronic_risk_is_clearly_identified_as_a_climate-related_risk"
  };


  const buildChart = () => {
    if (state.ResultSet) {
      const EUPPolicy = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['policy_legal'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPTechnology = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['technology_risk'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPMarket = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['market_risk'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPReputation = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['reputation_risk'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPAcute = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['acute_risk'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPChronic= chartHelpers.countResponsesByFilter(
          columnHeadersLookup['chronic_risk'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      

      return [
        {
          "id": "Policy & Legal Risk",
          "label": "Policy & Legal Risk",
          "value": EUPPolicy,
          "color": "hsl(300, 70%, 50%)"
        },
        {
          "id": "Technology Risk",
          "label": "Technology Risk",
          "value": EUPTechnology,
          "color": "hsl(193, 70%, 50%)"
        },
        {
          "id": "Market Risk",
          "label": "Market Risk",
          "value": EUPMarket,
          "color": "hsl(179, 70%, 50%)"
        },
        {
          "id": "Reputation Risk",
          "label": "Reputation Risk",
          "value": EUPReputation,
          "color": "hsl(55, 70%, 50%)"
        },
        {
          "id": "Acute Risk",
          "label": "Acute Risk",
          "value": EUPAcute,
          "color": "hsl(161, 70%, 50%)"
        },
        {
          "id": "Chronic Risk",
          "label": "Chronic Risk",
          "value": EUPChronic,
          "color": "hsl(161, 70%, 50%)"
        }
      ]
    }
  }

  const APIdata = buildChart()


  let climateData =  climateRisksData.climateRisksData.pieData;
  
  if (APIdata) {
    return (
      <div className="graph-container" style={{ width: 400, height: 450}}>
      <h5>Risks considered to be climate-related - 
          Electric Utility & Power Generators.</h5>
      <ResponsivePie
                data={APIdata}
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
  } return null;
}

export default ClimateRisksEnergy