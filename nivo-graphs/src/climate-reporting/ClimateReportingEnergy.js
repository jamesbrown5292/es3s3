import { React, useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import climateReportingData from './climate-reporting-data'
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"

const ClimateReportingEnergy = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get('https://l4etjxi6wc.execute-api.us-east-1.amazonaws.com/prod')
      .then((res) => {
        setState(res.data);
      });
  }, []);

  const columnHeadersLookup = {
    company: "company",
    industry: "industry",
    cdp2020: "1_did_the_company_disclose_using_cdp_climate_in_2020",
    sustainability_SRI: "2_did_the_companys_most_recent_sustainability_report_disclose_climate-related_info_using_a_gri_format",
    SASB_metrics: "3_does_the_company_use_sasb_metrics_to_disclose_sustainability_information",
    tcfd_used: "4_2_did_the_company_disclose_climate-related_info_using_tcfd_approach"
  };


  const buildChart = () => {
    if (state.ResultSet) {
      const oilGasCdpYes = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['cdp2020'],
          'Yes',
          state.ResultSet.Rows,
    columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const oilGasCdpNo = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['cdp2020'],
          'No',
          state.ResultSet.Rows,
    columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const oilGasSriYes = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['sustainability_SRI'],
          'Yes',
          state.ResultSet.Rows,
    columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const oilGasSriNo = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['sustainability_SRI'],
          'No',
          state.ResultSet.Rows,
    columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const oilGasSasbYes = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['SASB_metrics'],
          'Yes',
          state.ResultSet.Rows,
    columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const oilGasSasbNo= chartHelpers.countResponsesByFilter(
          columnHeadersLookup['SASB_metrics'],
          'No',
          state.ResultSet.Rows,
    columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const oilGasTcfdYes = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['tcfd_used'],
          'Yes',
          state.ResultSet.Rows,
    columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const oilGasTcfdNo= chartHelpers.countResponsesByFilter(
          columnHeadersLookup['tcfd_used'],
          'No',
          state.ResultSet.Rows,
    columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      

      return [
        {
          "id": "Disclosed using CDP climate in 2020",
          "label": "Disclosed using CDP climate in 2020",
          "value": oilGasCdpYes,
          "color": "hsl(300, 70%, 50%)"
        },
        {
          "id": "Did not disclose using CDP climate in 2020",
          "label": "Did not disclose using CDP climate in 2020",
          "value": oilGasCdpNo,
          "color": "hsl(193, 70%, 50%)"
        },
        {
          "id": "Disclosed using GRI format",
          "label": "Disclosed using GRI format",
          "value": oilGasSriYes,
          "color": "hsl(179, 70%, 50%)"
        },
        {
          "id": "Did not disclose using GRI format",
          "label": "Did not disclose using GRI format",
          "value": oilGasSriNo,
          "color": "hsl(55, 70%, 50%)"
        },
        {
          "id": "Use SASB metrics",
          "label": "Use SASB metrics",
          "value": oilGasSasbYes,
          "color": "hsl(161, 70%, 50%)"
        },
        {
          "id": "Do not use SASB metrics",
          "label": "Do not use SASB metrics",
          "value": oilGasSasbNo,
          "color": "hsl(161, 70%, 50%)"
        },
        {
          "id": "Use TCFD approach",
          "label": "Use TCFD approach",
          "value": oilGasTcfdYes,
          "color": "hsl(161, 70%, 50%)"
        },
        {
          "id": "Do not use TCFD approach",
          "label": "Do not use TCFD approach",
          "value": oilGasTcfdNo,
          "color": "hsl(161, 70%, 50%)"
        },
      ]
    }
  }

  const APIdata = buildChart()
  let climateData =  climateReportingData.climateReportingData;
  if (APIdata) {
    return (
      <div className="graph-container page-left" style={{ width: 700, height: 450}}>
    <h5>Electric Utility  Power Generators' climate reporting arrangements</h5>
            <ResponsivePie
                data={APIdata}
                height={400}
                width={700}
                margin={{ top: -0, right:200, bottom: 0, left: 200 }}
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
  } return null;
  }

export default ClimateReportingEnergy