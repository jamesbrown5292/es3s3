import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

const ClimateGovernance = () => {

  const demoData = [
    {
      "company": "Algonquin Power",
      "industry": "Electric Utility & Power Generators",
      "market-risk": "yes",
      "board-level-oversight": "yes",
      "climate-related-performance": "yes"
    },
    {
      "company": "BP",
      "industry": "Oil & Gas",
      "market-risk": "yes",
      "board-level-oversight": "no",
      "climate-related-performance": "yes"
    },
    {
      "company": "Brookfield Renewable",
      "industry": "Electric Utility & Power Generators",
      "market-risk": "yes",
      "board-level-oversight": "yes",
      "climate-related-performance": "no"
    },
    {
      "company": "Capital Power",
      "industry": "Electric Utility & Power Generators",
      "market-risk": "no",
      "board-level-oversight": "yes",
      "climate-related-performance": "yes"
    },
    {
      "company": "Cenovus",
      "industry": "Oil & Gas",
      "market-risk": "yes",
      "board-level-oversight": "yes",
      "climate-related-performance": "yes"
    },
    {
      "company": "Enbridge",
      "industry": "Electric Utility & Power Generators",
      "market-risk": "yes",
      "board-level-oversight": "yes",
      "climate-related-performance": "no"
    },
    {
      "company": "Energir",
      "industry": "Electric Utility & Power Generators",
      "market-risk": "no",
      "board-level-oversight": "no",
      "climate-related-performance": "yes"
    },
    {
      "company": "ExxonMobil",
      "industry": "Oil & Gas",
      "market-risk": "yes",
      "board-level-oversight": "yes",
      "climate-related-performance": "no"
    },
    {
      "company": "Fortis BC",
      "industry": "Electric Utility & Power Generators",
      "market-risk": "yes",
      "board-level-oversight": "no",
      "climate-related-performance": "no"
    },
    {
      "company": "Shell",
      "industry": "Oil & Gas",
      "market-risk": "no",
      "board-level-oversight": "no",
      "climate-related-performance": "no"
    },
    {
      "company": "Suncor",
      "industry": "Oil & Gas",
      "market-risk": "yes",
      "board-level-oversight": "no",
      "climate-related-performance": "yes"
    },
    {
      "company": "TC Energy",
      "industry": "Electric Utility & Power Generators",
      "market-risk": "yes",
      "board-level-oversight": "yes",
      "climate-related-performance": "yes"
    },
  ]
  
  const data = [
    {
      "country": "AD",
      "hot dog": 16,
      "hot dogColor": "hsl(165, 70%, 50%)",
      "burger": 81,
      "burgerColor": "hsl(346, 70%, 50%)",
      "sandwich": 39,
      "sandwichColor": "hsl(78, 70%, 50%)",
      "kebab": 156,
      "kebabColor": "hsl(303, 70%, 50%)",
      "fries": 50,
      "friesColor": "hsl(152, 70%, 50%)",
      "donut": 74,
      "donutColor": "hsl(55, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 61,
      "hot dogColor": "hsl(325, 70%, 50%)",
      "burger": 66,
      "burgerColor": "hsl(260, 70%, 50%)",
      "sandwich": 152,
      "sandwichColor": "hsl(76, 70%, 50%)",
      "kebab": 146,
      "kebabColor": "hsl(23, 70%, 50%)",
      "fries": 55,
      "friesColor": "hsl(261, 70%, 50%)",
      "donut": 6,
      "donutColor": "hsl(135, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 199,
      "hot dogColor": "hsl(297, 70%, 50%)",
      "burger": 90,
      "burgerColor": "hsl(98, 70%, 50%)",
      "sandwich": 48,
      "sandwichColor": "hsl(94, 70%, 50%)",
      "kebab": 75,
      "kebabColor": "hsl(162, 70%, 50%)",
      "fries": 137,
      "friesColor": "hsl(114, 70%, 50%)",
      "donut": 164,
      "donutColor": "hsl(106, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 51,
      "hot dogColor": "hsl(115, 70%, 50%)",
      "burger": 35,
      "burgerColor": "hsl(124, 70%, 50%)",
      "sandwich": 158,
      "sandwichColor": "hsl(51, 70%, 50%)",
      "kebab": 145,
      "kebabColor": "hsl(41, 70%, 50%)",
      "fries": 121,
      "friesColor": "hsl(329, 70%, 50%)",
      "donut": 128,
      "donutColor": "hsl(349, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 170,
      "hot dogColor": "hsl(249, 70%, 50%)",
      "burger": 20,
      "burgerColor": "hsl(130, 70%, 50%)",
      "sandwich": 181,
      "sandwichColor": "hsl(273, 70%, 50%)",
      "kebab": 192,
      "kebabColor": "hsl(203, 70%, 50%)",
      "fries": 39,
      "friesColor": "hsl(195, 70%, 50%)",
      "donut": 22,
      "donutColor": "hsl(192, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 74,
      "hot dogColor": "hsl(338, 70%, 50%)",
      "burger": 197,
      "burgerColor": "hsl(144, 70%, 50%)",
      "sandwich": 72,
      "sandwichColor": "hsl(93, 70%, 50%)",
      "kebab": 77,
      "kebabColor": "hsl(224, 70%, 50%)",
      "fries": 31,
      "friesColor": "hsl(136, 70%, 50%)",
      "donut": 64,
      "donutColor": "hsl(87, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 121,
      "hot dogColor": "hsl(323, 70%, 50%)",
      "burger": 40,
      "burgerColor": "hsl(94, 70%, 50%)",
      "sandwich": 95,
      "sandwichColor": "hsl(309, 70%, 50%)",
      "kebab": 40,
      "kebabColor": "hsl(336, 70%, 50%)",
      "fries": 182,
      "friesColor": "hsl(332, 70%, 50%)",
      "donut": 67,
      "donutColor": "hsl(50, 70%, 50%)"
    }
  ]

  return (
    <div>
      <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
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
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
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
  );
}

export default ClimateGovernance;

