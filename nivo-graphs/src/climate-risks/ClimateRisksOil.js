import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import climateRisksData from './climate-risks-data'

const ClimateRisks = () => {

  let climateData =  climateRisksData.climateRisksData.pieData;
  
  return (
    <div class="graph-container">
        <h5>Risks identified as being climate-related - Oil & Gas Companies</h5>
          <ResponsivePie
              data={climateData}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={{ scheme: 'nivo' }}
              borderWidth={1}
              borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
              radialLabelsSkipAngle={10}
              radialLabelsTextColor="#333333"
              radialLabelsLinkColor={{ from: 'color' }}
              sliceLabelsSkipAngle={10}
              sliceLabelsTextColor="#333333"
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      size: 4,
                      padding: 1,
                      stagger: true
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                  {
                      match: {
                          id: 'ruby'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'c'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'go'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'python'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'scala'
                      },
                      id: 'lines'
                  },
                  {
                      match: {
                          id: 'lisp'
                      },
                      id: 'lines'
                  },
                  {
                      match: {
                          id: 'elixir'
                      },
                      id: 'lines'
                  },
                  {
                      match: {
                          id: 'javascript'
                      },
                      id: 'lines'
                  }
              ]}
              legends={[
                  {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemTextColor: '#000'
                              }
                          }
                      ]
                  }
              ]}
          />
    </div>
  )
  }

export default ClimateRisks