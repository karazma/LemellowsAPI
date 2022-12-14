var express = require('express');
var routes =require('./routes');
var app = express();

app.use(express.json());

app.use('/api/chirps', routes);

app.listen(process.env.PORT || "3000", () => {
    console.log('Server is running on port: ${process.env.PORT || "3000"}');
})