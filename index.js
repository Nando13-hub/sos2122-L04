const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api", (Req,res)=>{
    res.send({  result: true});
});

app.listen(port, () => {
    console.log(`Server ready at port ${port}`);
});

