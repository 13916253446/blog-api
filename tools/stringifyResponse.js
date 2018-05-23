function errorData(msg) {
  return {
    isSuccess: false,
    msg,
    result: ''
  }
}


function okData(result) {
  return {
    isSuccess: true,
    msg: '成功',
    result
  }
}

module.exports = {
  errorData,
  okData
}