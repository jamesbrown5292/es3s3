import { React, useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import climateReportingData from './climate-reporting-data'
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"

const TcfdSignatories = () => {
  const [state, setState] = useState({})
    
  useEffect(() => {
      axios.get('https://l4etjxi6wc.execute-api.us-east-1.amazonaws.com/prod')
        .then((res) => {
          setState(res.data);
        });
    }, []);

  const columnHeadersLookup = {
    company: "company",
    industry: "industry",
    tcfd_signatory: "4_1_is_the_company_an_official_signatory_of_the_tcfd"
  };

  const buildChart = () => {
    if (state.ResultSet) {
      const oilGasYes = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['tcfd_signatory'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Oil & Gas')
      const oilGasNo = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['tcfd_signatory'],
          'No',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Oil & Gas')
      const EUPYes = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['tcfd_signatory'],
          'Yes',
          state.ResultSet.Rows,
          columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
      const EUPNo = chartHelpers.countResponsesByFilter(
          columnHeadersLookup['tcfd_signatory'],
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

  if (APIdata) {
    return (
      <div className="graph-container" style={{ width: 500, height: 400, marginLeft: '34%'}}>
          <h5>Are companies TCFD signatories? Comparison by sector.</h5>
            <ResponsivePie
                data={APIdata}
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
  } return null;
  
  }

export default TcfdSignatories