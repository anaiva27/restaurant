var tables = require("../data/tables")
var waitlist = require("../data/waitlist")

// export a function with app as a parameter that managers get requests
module.exports=function(app){
    app.get("/api/tables", function(req, res){
        res.json(tables)
    })
    app.get("/api/waitlist", function(req, res){
        res.json(waitlist)
    })
}