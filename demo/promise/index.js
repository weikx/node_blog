const fs = require('fs'),
    path = require('path')
/**
function getFileContent(fileName, callback) {
  const fullFileName = path.resolve(__dirname, 'files', fileName)
  fs.readFile(fullFileName, (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    callback(
      JSON.parse(data)
    )
  })
}

getFileContent('a.json', adata => {
  console.log(adata)
  getFileContent(adata.next, bdata => {
    console.log(bdata)
    getFileContent(bdata.next, cdata => {
      console.log(cdata)
    })
  })
})
**/


function getFileContent (fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(
        JSON.parse(data)
      )
    })
  })
  return promise
}

getFileContent('a.json').then(aData => {
  console.log(aData)
  return getFileContent(aData.next)
}).then(bData => {
  console.log(bData)
  return getFileContent(bData.next)
}).then(cData => {
  console.log(cData)
})