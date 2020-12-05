const _ = require('lodash')

const DataHelpers = {

  //Method to count up all 'response' fields (e.g. yes/no) given a 'columnHeader', returns the count
  countValues (columnHeader, response, dataArray) {

    return dataArray.reduce(((acc, curr) => {
      if (curr[columnHeader] === response) {
        acc++;
      }
      return acc;
    }), 0)

  },

  //Method that takes in the raw data, an xValues array of strings to be displayed along the x-axis
  //and a keysObject. The keys object takes as keys the names of the labels you want to give to the data, the values correspond 
  //to the column headers in the raw data (which we can feed into countValues function)
  produceBarData (lookupObject, response, rawData) {
    const retArr = [];
    Object.keys(lookupObject).map(label => {
      retArr.push({xValue: label});
      console.log("retArr", retArr)
    });


    retArr.forEach(rowObject => {
      Object.values(lookupObject).map(unformattedLabel => {

        const getKeyByValue = (object, value) => {
          return Object.keys(object).find(key => object[key] === value);
        }
        
        const formattedLabel = getKeyByValue(lookupObject, unformattedLabel)
        rowObject[formattedLabel] = this.countValues(unformattedLabel, response, rawData)
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
        value: this.countValues((lookupObject[key]), response, data)
      };
      const objCopy = _.cloneDeep(retObj);
      retArr.push(objCopy);
    });
    return retArr;
  }
};




//////////// TEST DATA /////////////////
let testData2 = [
  {
    unformatted_column_header_X: 'yes',
    unformatted_column_header_Y: 'yes'
  },
  {
    unformatted_column_header_X: 'yes',
    unformatted_column_header_Y: 'no'
  },
  {
    unformatted_column_header_X: 'yes',
    unformatted_column_header_Y: 'no'
  },
  {
    unformatted_column_header_X: 'yes',
    unformatted_column_header_Y: 'no'
  }
]

let refsObj = {
  "Yes": "unformatted_column_header_X",
  "No": "unformatted_column_header_Y"
};

let searchResponse = 'yes';

console.log(DataHelpers.produceBarData(refsObj, searchResponse, testData2));