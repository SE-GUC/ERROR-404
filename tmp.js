const funcs = require('./fn.js')

funcs.getInvalidPage().then(doc=>{console.log(doc.data)})