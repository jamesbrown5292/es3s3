const _ = require('lodash')

const DataHelpers = {

  //Method to count up all 'response' fields (e.g. yes/no) given a 'column', returns the count
  // countValues (columnHeader, response, dataArray) {

  //   return dataArray.reduce(((acc, curr) => {
  //     if (curr[columnHeader] === response) {
  //       acc++;
  //     }
  //     return acc;
  //   }), 0)

  // },

  // Get the column index given a column header
  getColumnIndex (column, data) {
    for (let i = 0; i < data[0].Data.length; i++){
        if (data[0].Data[i].VarCharValue === column) {
          return i
        }
    }
  },

  // Count up all the 'response' fields given a column
  countResponses (column, response, data) {
    const columnIndex = this.getColumnIndex(column, data);
    let rows = data.slice(1);
    let count = 0;
    for (let k = 0; k < rows.length; k++){
      if (rows[k].Data[columnIndex].VarCharValue == response) {
        count++;
      };
    };
    return count
  },



  //Method that takes in the raw data, an xValues array of strings to be displayed along the x-axis
  //and a keysObject. The keys object takes as keys the names of the labels you want to give to the data, the values correspond 
  //to the column headers in the raw data (which we can feed into countValues function)
  produceBarData (lookupObject, response, rawData) {
    const retArr = [];
    Object.keys(lookupObject).map(label => {
      retArr.push({xValue: label});
    });


    retArr.forEach(rowObject => {
      Object.values(lookupObject).map(unformattedLabel => {

        const getKeyByValue = (object, value) => {
          return Object.keys(object).find(key => object[key] === value);
        }
        
        const formattedLabel = getKeyByValue(lookupObject, unformattedLabel)
        rowObject[formattedLabel] = this.countResponses(unformattedLabel, response, rawData)
      })
    })
    return retArr;

},

  //Method that takes in a lookupObject where the keys are the formatted labels you want to show and the values are the 
  //corresponding unformatted column labels in the table; a 'yes'/'no' response to query; and the data
  //and returns a list of objects formatted for pie charts. 
  producePieData (lookupObject, response, data) {
    const retArr = [];
    Object.keys(lookupObject).map( key => {
      const retObj = {
        id: key,
        label: key,
        value: this.countResponses((lookupObject[key]), response, data)
      };
      const objCopy = _.cloneDeep(retObj);
      retArr.push(objCopy);
    });
    return retArr;
  }
};


let refsObj = {
"Yes": "1_does_the_company_clearly_identify_board_level_oversight_existing_on_climate_related_issues",
"No": "1_does_the_company_clearly_identify_board_level_oversight_existing_on_climate_related_issues"
};


//////////// TEST DATA /////////////////


let searchResponse = 'yes';

const testData = {
  UpdateCount: 0,
  ResultSet: {
    Rows: [
      {
        Data: [{
          VarCharValue: "company"
        },
        {
          VarCharValue: "industry"
        },
        {
          VarCharValue: "theme area"
        },
        {
        VarCharValue: "indicator"
        },
        {
        VarCharValue: "1_does_the_company_clearly_identify_board_level_oversight_existing_on_climate_related_issues"
        },
        {
        VarCharValue: "1_context"
        },
        {
        VarCharValue: "1_sources"
        },
        {
        VarCharValue: "1_date_last_updated"
        },
        {
        VarCharValue: "1_last_updated_by"
        },
        {
        VarCharValue: "2_does_the_company_identify_that_climate_related_performance_is_factored_into_the_overall_board_or_executive_leadership_compensation"
        },
        {
        VarCharValue: "2_context"
        },
        {
        VarCharValue: "2_sources"
        },
        {
        VarCharValue: "2_date_updated"
        },
        {
        VarCharValue: "2_updated_by"
        }]
    },
      {
        Data: [
          {
          VarCharValue: "Algonquin Power"
          },
          {
          VarCharValue: "Electric Utility & Power Generators"
          },
          {
          VarCharValue: "Governance"
          },
          {
          VarCharValue: "Board Oversight"
          },
          {
          VarCharValue: ""
          },
          {
          VarCharValue: ""
          },
          {
          VarCharValue: "APUC TCFD Report 2020:http://algonquinpower.com/docs/APUC-TCFD-Report-2020.pdf"
          },
          {
          VarCharValue: "2020-11-28"
          },
          {
          VarCharValue: "Austin Zacharko"
          },
          {
          VarCharValue: ""
          },
          {
          VarCharValue: ""
          },
          {
          VarCharValue: ""
          },
          {
          VarCharValue: ""
          },
          {
          VarCharValue: ""
          }
          ]
    },
    {
      Data: [
      {
      VarCharValue: "BP"
      },
      {
      VarCharValue: "Oil & Gas"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The board is responsible for the overall conduct of the groupâ€™s business which extends to setting our strategy and approach to the energy transition."
      },
      {
      VarCharValue: "BP 2019 TCFD Report:https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/sustainability/bp-tcfd-2019.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "BP's 2019 Corporate Sc"
      },
      {
      VarCharValue: "BP Annual Report and Form 20F-2019 pg. 107 https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/investors/bp-annual-report-and-form-20f-2019.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "Brookfield Renewable"
      },
      {
      VarCharValue: "Electric Utility & Power Generators"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The board and its associated committees where appropriate have oversight of climate-related matters."
      },
      {
      VarCharValue: "BP TCFD 2019:https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/sustainability/bp-tcfd-2019.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "No"
      },
      {
      VarCharValue: "Brookfield Renewable Partners is managed by Brookfield Asset Management (BAM). BAM's 2020 circular does not state KPI's for performance based pay on climate targets."
      },
      {
      VarCharValue: "Brookfield Asset Management 2020 Circular pg. 58 https://bam.brookfield.com/~/media/Files/B/BrookField-BAM-IR-V2/management-information-circular/2020/MIC2020-FINAL.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "Capital Power"
      },
      {
      VarCharValue: "Electric Utility & Power Generators"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The annual corporate planning/strategy process is completed with extensive direction and input from the Executive Team and the Board based on their understanding of climate change risks impacts and opportunities for our business."
      },
      {
      VarCharValue: "2019 Climate Change Disclosure Report:https://www.capitalpower.com/wp-content/uploads/2020/02/2019-capital-power-climate-change-disclosure-report-tcfd.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "No"
      },
      {
      VarCharValue: "Capital Powers 2019 Corporate Scorecard clearly identifies 'environment' as being a KPI that directly impacts compensation. But it does not show if that relates to GHG of climate issues."
      },
      {
      VarCharValue: "Capital Power 2020 Management Proxy Circular pg. 51: https://www.capitalpower.com/wp-content/uploads/2020/03/2020-Management-Proxy-Circular.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "Cenovus"
      },
      {
      VarCharValue: "Oil & Gas"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The Board has accountability for both risks and opportunities at Cenovus and the Safety Environment Responsibility & Reserves Committee has oversight for ESG risks including climate."
      },
      {
      VarCharValue: "2019 ESG Report pg. 18:https://www.cenovus.com/reports/2019/2019-esg-report.pdf"
      },
      {
      VarCharValue: "2020-11-21"
      },
      {
      VarCharValue: "Markus Selkirk"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "Cenovus's 2019 Corporate Scorecard clearly identifies 'Oil sands emission intensity' as being a climate-related factor that directly impacts compensation."
      },
      {
      VarCharValue: "2019 ESG Report pg. 19: https://www.cenovus.com/reports/2019/2019-esg-report.pdf 2020 Management Information Circular pg. 36: https://www.cenovus.com/invest/docs/2020/2020-management-information-circular.pdf"
      },
      {
      VarCharValue: "2020-11-21"
      },
      {
      VarCharValue: "Markus Selkirk"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "Enbridge"
      },
      {
      VarCharValue: "Electric Utility & Power Generators"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The Board Committee Corporate Social Responsibility Committee has oversight on sustainability matters including climate and energy. The Board is also involved directly with Climate Scenario Planning."
      },
      {
      VarCharValue: "Resilient Energy Infrastructure pg. 18 & 19: https://www.enbridge.com/~/media/Enb/Documents/Reports/Resilient_Energy_Infrastructure_report_FINAL.pdf 2019 Sustainability Report pg. 21:https://www.enbridge.com/~/media/Enb/Documents/Reports/CSR_2019_FULL-1009.pdf 2020 Management Information Circular pg. 44:https://www.enbridge.com/~/media/Enb/Documents/Investor%20Relations/2020/2020_ENB_AnnualMeeting_MIC.pdf"
      },
      {
      VarCharValue: "2020-11-21"
      },
      {
      VarCharValue: "Markus Selkirk"
      },
      {
      VarCharValue: "No"
      },
      {
      VarCharValue: "While Enbridge states that 'Sustainability is integrated into the compensation structure of leadershipâ€¦' no evidence of climate-related issues being identified as being a compensation factor was found."
      },
      {
      VarCharValue: "2019 Sustainability Report pg. 19: https://www.enbridge.com/~/media/Enb/Documents/Reports/CSR_2019_FULL-1009.pdf Climate Resilient Infrastructure: https://www.enbridge.com/~/media/Enb/Documents/Reports/Resilient_Energy_Infrastructure_report_FINAL.pdf 2020 Management Information Circular: https://www.enbridge.com/~/media/Enb/Documents/Investor%20Relations/2020/2020_ENB_AnnualMeeting_MIC.pdf"
      },
      {
      VarCharValue: "2020-11-21"
      },
      {
      VarCharValue: "Markus Selkirk"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "Energir"
      },
      {
      VarCharValue: "Electric Utility & Power Generators"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The Board of Directors is responsible for approving policies that have an impact on a number of areas of sustainable development. The Environmental Policy is used to establish and clearly communicate the environmental protection objectives."
      },
      {
      VarCharValue: "2017 Sustainability Report pg. 19:https://www.energir.com/~/media/Files/Corporatif/Dev%20durable/2017%20Sustainability%20Report.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "No"
      },
      {
      VarCharValue: "Energir has no public evidence that demonstrates climate-related performance is a factor is compensation."
      },
      {
      VarCharValue: "Energir Corporate Structure Page: https://www.energir.com/en/about/the-company/who-we-are/corporate-structure/"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "ExxonMobil"
      },
      {
      VarCharValue: "Oil & Gas"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The Board has a well established risk framework in place to oversee risks faced by the Company including those related to climate change."
      },
      {
      VarCharValue: "2020 Energy & Carbon Summary pg. 4 https://corporate.exxonmobil.com/-/media/Global/Files/energy-and-carbon-summary/Energy-and-carbon-summary.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "ExxonMobil's 2019 Corporate Scorecard clearly identifies 'developing lower emission technologies & reducing flaring' were a key KPI that directly impacts compensation."
      },
      {
      VarCharValue: "ExxonMobil's 2020 Proxy pg. 44: https://corporate.exxonmobil.com/-/media/Global/Files/investor-relations/annual-meeting-materials/proxy-materials/2020-Proxy-Statement.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "Fortis Inc."
      },
      {
      VarCharValue: "Electric Utility & Power Generators"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The Board is responsible for the stewardship of Fortis. Climate risk is a subset of the responsibilities for which the Board of Directors has stewardship responsibility."
      },
      {
      VarCharValue: "Fortis Inc. Sustainability Report 2020 pg. 74 https://www.fortisinc.com/docs/default-source/environment-reports/2020-fortis-sustainability-report.pdf?sfvrsn=e8927498_4"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "No"
      },
      {
      VarCharValue: "Fortis Inc. 2019 Corporate Scorecard clearly identifies 'sustainability' as being a KPI that directly impacts compensation. But these measures are related to reliability, not climate or emissions."
      },
      {
      VarCharValue: "Fortis Inc Management Information Circular 2020 pg. 70: https://www.fortisinc.com/docs/default-source/finance-regulatory-reports/circulars/fortis-2020-mic-web.pdf?sfvrsn=924a7498_2"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "Shell"
      },
      {
      VarCharValue: "Oil & Gas"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "Climate change and risks resulting from GHG emissions have been identified as a significant risk factor for Shell and are managed in accordance with other significant risks through the Board and Executive Committee."
      },
      {
      VarCharValue: "Shell Mapping in Extracts: https://www.shell.com/sustainability/sustainability-reporting-and-performance-data/how-we-report/reporting-standards-and-guidelines/_jcr_content/par/expandablelist_copy/expandablesection_910241753.stream/1587394549959/8a32b2cf0978fae4527b0fe0071be7139515628e/tcfd-shell-mapping-2019-awv2.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "Shells 2019 Corporate Scorecard clearly identifies 'GHG emissions targets' as being a KPI that directly impacts compensation."
      },
      {
      VarCharValue: "Shell 2020 Annual Report 20-F pg. 103: https://shell.gcs-web.com/static-files/9fb8f1d5-98bd-420b-af55-7fbd5edf7781"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "Suncor"
      },
      {
      VarCharValue: "Oil & Gas"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "The board oversees our Enterprise Risk Management (ERM) program and annually reviews principal risks. Carbon risk is one of these principal risks requiring the full board to review external trends carbon risk pathways and Suncorâ€™s mitigation plans at least once a year."
      },
      {
      VarCharValue: "Report on Sustainability 2020 pg. 45 https://sustainability-prd-cdn.suncor.com/-/media/project/ros/shared/documents/reports-on-sustainability/2020-report-on-sustainability-en.pdf?modified=20200716181438&_ga=2.98149532.2029830912.1606352768-1077783955.1593009628"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "No"
      },
      {
      VarCharValue: "Suncor's 2019 Corporate Scorecard clearly identifies 'sustainability' as being a KPI that directly impacts compensation. But these measures are related to environmental regulatory incidents not emissions."
      },
      {
      VarCharValue: "2020 Suncor Management Proxy Circular pg. 36: https://www.suncor.com/en-ca/investor-centre/financial-reports/annual-disclosure"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
      ]
      },
      {
      Data: [
      {
      VarCharValue: "TC Energy"
      },
      {
      VarCharValue: "Electric Utility & Power Generators"
      },
      {
      VarCharValue: "Governance"
      },
      {
      VarCharValue: "Board Oversight"
      },
      {
      VarCharValue: "Yes"
      },
      {
      VarCharValue: "Board oversight includes climate change-related risk and environmental and social issues as well as TC Energy's commitment to sustainability."
      },
      {
      VarCharValue: "TC Energy ESG Data Sheet: https://www.tcenergy.com/siteassets/pdfs/sustainability/report/ESG_2020.pdf#page=5"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      },
      {
      VarCharValue: "No"
      },
      {
      VarCharValue: "TC Energy's 2019 Corporate Scorecard does not identify any climate related KPI's tied to compensation."
      },
      {
      VarCharValue: "TC Energy 2020 Management Information Circular pg. 96: https://www.tcenergy.com/siteassets/pdfs/investors/notice-and-access/2020/tc-2020-management-information-circular.pdf"
      },
      {
      VarCharValue: "2020-11-28"
      },
      {
      VarCharValue: "Austin Zacharko"
      }
  ]}]}, 
  ResponseMetaData: {}
}

const workingData = testData.ResultSet.Rows;
const columnHeadersLookup = {
  board_level_oversight: "1_does_the_company_clearly_identify_board_level_oversight_existing_on_climate_related_issues",
  climate_related_performance: "2_does_the_company_identify_that_climate_related_performance_is_factored_into_the_overall_board_or_executive_leadership_compensation",
}

const getColumnIndex = (column, data) => {
  for (let i = 0; i < data[0].Data.length; i++){
      if (data[0].Data[i].VarCharValue === column) {
        return i
      }
  }
};

const countResponses = (column, response, data) => {

  const columnIndex = getColumnIndex(column, data);
  
  let rows = data.slice(1);
  let count = 0;
  
  for (let k = 0; k < rows.length; k++){
    // eslint-disable-next-line eqeqeq
    if (rows[k].Data[columnIndex].VarCharValue == response) {
      count++;
    };
  };
  return count
  
}

console.log(DataHelpers.produceBarData(refsObj, 'Yes', workingData))
