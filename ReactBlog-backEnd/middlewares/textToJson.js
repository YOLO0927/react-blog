module.exports = function (req) {
  function objIsEmpty (obj) {
    for (let key in obj) {
      return false
    }
    return true
  }
  return new Promise((resolve, reject) => {
    if (objIsEmpty(req.body)) {
      let body = '', jsonStr
      req.on('data', (chunk) => {
        body += chunk
      })

      req.on('end', () => {
        try {
          jsonStr = JSON.parse(body)
        } catch(err) {
          jsonStr = null
        }
        resolve(jsonStr)
      })
    } else {
      resolve(req.body)
    }
  })
}
