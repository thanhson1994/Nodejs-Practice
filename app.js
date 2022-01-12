const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
app.use((req, res, next) => {
    User.findById('61de5b275258a7b7a90559d7').then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err));
});
app.use('/admin', adminRoutes);

app.use('/feed', feedRoutes);
app.use(shopRoutes);


mongoose.connect('mongodb+srv://thanhson:bo123654789@cluster0.suhpz.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(result => {
    User.findOne().then(user => {
        if(!user) {
            const user = new User({
                name: 'Son',
                email: 'test@gmail.com',
                cart: {
                    items: []
                }
            });
            user.save();
        }
    })
    console.log('Connected', result);
    app.listen(8080);

})
.catch(err => console.log('err', err))
