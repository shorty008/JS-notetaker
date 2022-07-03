//added Depency 
const express = require('express');

//set up app to use express
const app = express();

//create routes 
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//Define port
const PORT = process.env.PORT || 3001;

//Data Parse 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//server listener 
app.listen(PORT, () => {
    console.log('Server now on port ${port}!');
});