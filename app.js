const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();
const mongoose = require('mongoose');

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
app.use('/admin', adminRoutes);

app.use('/feed', feedRoutes);
app.use(shopRoutes);
mongoose.connect('mongodb+srv://thanhson:bo123654789@cluster0.suhpz.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(result => {
    console.log('Connected', result);
    app.listen(8080);

})
.catch(err => console.log('err', err))
