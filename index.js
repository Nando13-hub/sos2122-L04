const express = require("express");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const backend = require("./src/back_ferparbel");

const app = express();

backend(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server ready at port ${port}`);
});

