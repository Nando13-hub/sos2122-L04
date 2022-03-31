module.exports = (app) =>{

    app.get("/api", (Req,res)=>{
        res.send({  result: true});
    });    
    
};