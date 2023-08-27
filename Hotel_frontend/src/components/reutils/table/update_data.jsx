
const update_table = (data, table) => {
  const filteredData = table.filter(
    objeto => objeto.id != data.id
  )
  return [...filteredData, data];
 }
const delete_table = (id, table) => {
  const filteredData = table.filter(
    objeto => objeto.id != id
  )
  return filteredData;
}

const addData_table = (data, table) => {
  return [...table, data];
}


export {
  update_table,
  delete_table,
  addData_table,
}