const Mock = require('mockjs')
const Random = Mock.Random
module.exports = Mock.mock({
    "list|6-10" :[
        {
            "title|4-8":"@cword",
            "url":()=>Random.image("200x200",Random.color(),Random.cword()),
            "price|10-30":1,
            "count":1,
            "check":0,
            "id|+1":0
        }
    ]
})