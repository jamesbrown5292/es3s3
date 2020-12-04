module.exports = {

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
  produceBarData (rawData, xValuesArray, dataLabels) {
    const retArr = [];
    xValuesArray.map(label => {
      retArr.push({xValue: label})
    });
    retArr.forEach(rowObject => {
      for (let i=0; i < Object.keys(dataLabels).length; i++) {
        rowObject[Object.keys(dataLabels)[i]] = this.countValues((Object.values(dataLabels)[i]), )
      }
  }



};


let testData2 = [
  {
    header: 'yes',
    footer: 'yes'
  },
  {
    header: 'yes',
    footer: 'no'
  },
  {
    header: 'yes',
    footer: 'no'
  },
  {
    header: 'yes',
    footer: 'no'
  }
]