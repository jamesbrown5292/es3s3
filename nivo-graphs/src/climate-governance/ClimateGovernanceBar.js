import { ResponsiveBar } from '@nivo/bar'
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"


const ClimateGovernanceBar = () => {
  const [state, setState] = useState({})
  

  useEffect(() => {
    axios.get('https://aypjnigcug.execute-api.us-east-1.amazonaws.com/prod')
      .then((res) => {
      setState(res.data);
      });
  }, []);

  const columnHeadersLookup = {
    company: "company",
    industry: "industry",
    board_level_oversight: "1_does_the_company_clearly_identify_board_level_oversight_existing_on_climate_related_issues",
    climate_related_performance: "2_does_the_company_identify_that_climate_related_performance_is_factored_into_the_overall_board_or_executive_leadership_compensation",
  };

  const buildChart = () => {
    if (state.ResultSet) {
      const oilGasGovernanceYes = chartHelpers.countResponsesByFilter(
        columnHeadersLookup['board_level_oversight'],
        'Yes',
        state.ResultSet.Rows,
        columnHeadersLookup['industry'], 'Oil & Gas')
      const oilGasGovernanceNo = chartHelpers.countResponsesByFilter(
        columnHeadersLookup['board_level_oversight'],
        'No',
        state.ResultSet.Rows,
        columnHeadersLookup['industry'], 'Oil & Gas')
      const EUPGovernanceYes = chartHelpers.countResponsesByFilter(
        columnHeadersLookup['board_level_oversight'],
        'Yes',
        state.ResultSet.Rows,
        columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPGovernanceNo = chartHelpers.countResponsesByFilter(
        columnHeadersLookup['board_level_oversight'],
        'No',
        state.ResultSet.Rows,
        columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
        const oilGasPerformanceYes = chartHelpers.countResponsesByFilter(
        columnHeadersLookup['climate_related_performance'],
        'Yes',
        state.ResultSet.Rows,
        columnHeadersLookup['industry'], 'Oil & Gas')
      const oilGasPerformanceNo = chartHelpers.countResponsesByFilter(
        columnHeadersLookup['climate_related_performance'],
        'No',
        state.ResultSet.Rows,
        columnHeadersLookup['industry'], 'Oil & Gas')
      const EUPPerformanceYes = chartHelpers.countResponsesByFilter(
        columnHeadersLookup['climate_related_performance'],
        'Yes',
        state.ResultSet.Rows,
        columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPPerformanceNo = chartHelpers.countResponsesByFilter(
        columnHeadersLookup['climate_related_performance'],
        'No',
        state.ResultSet.Rows,
        columnHeadersLookup['industry'], 'Electric Utility & Power Generators')

        return [
          {
            indicator: 'Board level oversight - Yes',
            'Oil & Gas': oilGasGovernanceYes,
            'Electric, Utility & Power Generators': EUPGovernanceYes
          },
          {
            indicator: 'Board level oversight - No',
            'Oil & Gas': oilGasGovernanceNo,
            'Electric, Utility & Power Generators': EUPGovernanceNo
          },

          {
            indicator: 'Climate-related performance - Yes',
            'Oil & Gas': oilGasPerformanceYes,
            'Electric, Utility & Power Generators': EUPPerformanceYes
          },
          {
            indicator: 'Climate-related performance - No',
            'Oil & Gas': oilGasPerformanceNo,
            'Electric, Utility & Power Generators': EUPPerformanceNo
          },

        ]
    };
  }

  const testData = buildChart()
  console.log(testData)

  const data = [
    {
      indicator: 'Board-oversight',
      'Oil & Gas': 9,
      'Electric, Utility & Power Generators': 6
    },
    {
      indicator: 'Climate-related performance',
      'Oil & Gas': 12,
      'Electric, Utility & Power Generators': 9
    }
    ]
  if (testData) {
    return (
      <div className="graph-container page-left" style={{ width: 400, height: 450}}>
        <h5>Climate governance arrangements, by sector</h5>
        <ResponsiveBar
            data={testData}
            width={400}
            height={400}
            keys={[ 'Oil & Gas', 'Electric, Utility & Power Generators']}
            indexBy="indicator"
            margin={{ top: 10, right: 0, bottom: 50, left: 60 }}
            padding={0.5}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'category10' }}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            borderRadius={15}
            enableGridY={false}
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
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
  
      </div>
    )
  }
  return null;
};

export default ClimateGovernanceBar