const chartHelpers = {

  getColumnIndex (column, data) {
    for (let i = 0; i < data[0].Data.length; i++){
      if (data[0].Data[i].VarCharValue === column) {
        return i
      }
    }
  },
 
  filterDataByResponse (column, response, data) {
    const columnIndex = this.getColumnIndex(column, data)
    const retArr = []
    for (let row of data) {
      if(row.Data[columnIndex].VarCharValue === response) {
        retArr.push(row)
      }
    }
    return retArr;
  },

  countResponsesByFilter (column, response, data, filterColumnHeader, filterColumnValue) {
    const filteredData = this.filterDataByResponse(filterColumnHeader, filterColumnValue, data);
    const columnIndex = this.getColumnIndex(column, data);
    let count = 0;
    for (let k = 0; k < filteredData.length; k++){
      // eslint-disable-next-line eqeqeq
      if (filteredData[k].Data[columnIndex].VarCharValue == response) {
        count++;
      };
    };
    return count
  }
}

module.exports = chartHelpers

// const getColumnIndex = (column, data) => {
//   for (let i = 0; i < data[0].Data.length; i++){
//       if (data[0].Data[i].VarCharValue === column) {
//         return i
//       }
//   }
// };

// const filterDataByResponse = (column, response, data) => {
//   const columnIndex = getColumnIndex(column, data)
//   const retArr = []
//   for (let row of data) {
//     if(row.Data[columnIndex].VarCharValue === response) {
//       retArr.push(row)
//     }
//   }
//   return retArr;
// }

// const countResponsesByFilter = (column, response, data, filterColumnHeader, filterColumnValue) => {
//   const filterOilGas = filterDataByResponse(filterColumnHeader, filterColumnValue, data);
//   const columnIndex = getColumnIndex(column, data);
//   let count = 0;
//   for (let k = 0; k < filterOilGas.length; k++){
//     // eslint-disable-next-line eqeqeq
//     if (filterOilGas[k].Data[columnIndex].VarCharValue == response) {
//       count++;
//     };
//   };
//   return count
// }