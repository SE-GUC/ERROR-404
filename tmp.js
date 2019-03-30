const funcs = require('./fn.js')

funcs.deleteDebate().then(doc=>{return console.log(doc.data.data)})
