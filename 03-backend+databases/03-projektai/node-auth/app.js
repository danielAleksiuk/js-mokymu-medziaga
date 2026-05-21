const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))
app.use(authRoutes);
app.use(express.json());

const port = 3000;
const dbURL = 'mongodb+srv://vcsUser:admin123@node1.stvvbdc.mongodb.net/?appName=Node1';
const dbName = 'node-auth';


app.listen(3000);
mongoose.connect(dbURL, {dbName: dbName})
    .then(result => console.log('prie DB pasijungem'))
    .catch(error => console.log(error));



