const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to my awesome app123123!");
});

app.listen(3000, function() {
    console.log("app listening on port 3000123");
});