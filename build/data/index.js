const data = require('./data/data.js')

module.exports.getList= function(app){
    app.get('/list',(req,res)=>{
        res.send(data)
    })
}