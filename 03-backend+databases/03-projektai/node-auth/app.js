const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const {requireAuth} = require('./middleware/authMiddleware');


const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))

app.use(cookieParser());


const port = 3000;
const dbURL = 'mongodb+srv://vcsUser:admin123@node1.stvvbdc.mongodb.net/?appName=Node1';
const dbName = 'node-auth';


app.get('/set-cookies', (req, res) => {
    res.cookie('newUSer', false)
    res.cookie('isStudent', true, {
        maxAge: 1000 * 60 * 60 * 24,
        secure: true
    });

    res.send('cookies are saved')
});

app.get('/read-cookies', (req,res) => {
    res.json(
        req.cookies
    );
});

app.get('/', requireAuth, (req, res) => {
    res.render('index');
})
app.use(authRoutes);
app.listen(3000);
mongoose.connect(dbURL, {dbName: dbName})
    .then(result => console.log('prie DB pasijungem'))
    .catch(error => console.log(error));



