import { ResponsiveBar } from '@nivo/bar'
import climateReportingData from './climate-reporting-data'
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import chartHelpers from "../data-helpers/chartHelpers.js"


const CdpScore = () => {
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
        cdp_score: "1_1_if_yes_what_is_their_most_recent_cdp_climate_score_(a/a-/b/b-/c/c-/d/d-/f/n/a)"
    };


    const buildChart = () => {
        if (state.ResultSet) {
            const oilGasA = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'A',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasAMinus = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'A-',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPA = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'A',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPAMinus = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'A-',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
         
            const oilGasB = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'B',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasBMinus = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'B-',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPB = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'B',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPBMinus = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'B-',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
         
            const oilGasC = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'C',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasCMinus = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'C-',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPC = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'C',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPCMinus = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'C-',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
         
            const oilGasD = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'D',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const oilGasDMinus = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'D-',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPD = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'D',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
            const EUPDMinus = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'D-',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')      
         
            const oilGasF = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'F',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPF = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'F',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
       
            const oilGasNa = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'N/A',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Oil & Gas')
            const EUPNa = chartHelpers.countResponsesByFilter(
                columnHeadersLookup['cdp_score'],
                'N/A',
                state.ResultSet.Rows,
                columnHeadersLookup['industry'], 'Electric Utility & Power Generators')
       

                return [
                    {
                      indicator: 'Oil & Gas',
                      'A': oilGasA,
                      'A-': oilGasAMinus,
                      'B': oilGasB,
                      'B-': oilGasBMinus,
                      'C': oilGasC,
                      'C-': oilGasCMinus,
                      'D': oilGasD,
                      'D-': oilGasDMinus,
                      'F': oilGasF,
                      'N/A': oilGasNa,
                    },
                    {
                      indicator: 'Electric Utility & Power Generators',
                      'A': EUPA,
                      'A-': EUPAMinus,
                      'B': EUPB,
                      'B-': EUPBMinus,
                      'C': EUPC,
                      'C-': EUPCMinus,
                      'D': EUPD,
                      'D-': EUPDMinus,
                      'F': EUPF,
                      'N/A': EUPNa,
                    },
                   
                  ]
        }
    }

    const APIdata = buildChart()

    const data = climateReportingData.cdpScore
    if (APIdata) {
    return (
        <div className="graph-container" style={{ width: 500, height: 450, marginLeft: 110}}>
            <h5>Sector comparison of CDP scores</h5>        
            <ResponsiveBar
                data={APIdata}
                height={400}
                width={400}
                keys={[ 'A', 'A-', 'B', 'B-', 'C', 'C-', 'D', 'D-', 'F', 'N/A']}
                indexBy="indicator"
                margin={{ top: 50, right: 0, bottom: 50, left: 30 }}
                padding={0.6}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'yellow_orange_red' }}
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
    }

    return null;

};

export default CdpScore