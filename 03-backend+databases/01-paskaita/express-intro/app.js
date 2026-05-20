const express = require('express');
const mongoose = require('mongoose');
const Lesson = require('./models/lesson');

const app = express();
app.set('view engine', 'ejs');

app.set('views', './views-ejs')
app.use(express.static(__dirname));
// app.use(express.urlencoded({extended: true}))

const port = 3000;

app.listen(3000);

const dbURL = 'mongodb+srv://vcsUser:admin123@node1.stvvbdc.mongodb.net/?appName=Node1';
const dbName = 'Mokykla';

mongoose.connect(dbURL, {dbName: dbName})
    .then(result => console.log('prie DB pasijungem'))
    .catch(error => console.log(error));
// mongoose.connection.useDb('Mokykla');

app.get('/addLesson', (req, res) => {
    const newLesson = new Lesson({
        name: 'biologija',
        description: 'bla bla bla',
        minNumberOfStudent: 5
    });

    newLesson.save()
        .then(result => res.send(result))
        .catch(error => console.log(error));
});

app.get('/allLessons', (req, res) => {
    Lesson.find()
        .then(result => res.render('index', {
                title: 'mano pirmas db response',
                lessons: result})
                //res.send(result)
        )
        .catch(error => console.log(error))
});

app.get('/oneLesson', (req, res) => {
    Lesson.findById('6a0dce91b6bace930fd92451')
        .then(result => res.send(result))
        .catch(error => console.log(error));
});

app.delete('/lesson/:id', (req, res) => {
    const id = req.params.id;

    Lesson.findByIdAndDelete(id)
        .then(result => res.send(result))
        .catch(error => console.log(error));
});

app.put('/lesson/:id', (req, res) => {
    const id = req.params.id;
    const body = {name: 'random name'};

    Lesson.findByIdAndUpdate(id, body)
        .then(result => res.send(result))
        .catch(error => console.log(error));
})

app.get('/', (req, res) => {
    // res.send('<h1>valio expresss veikia</h1>');
    // res.sendFile('./views-ejs/index.ejs', {root: __dirname})
    const pamokos = [
        { title: 'matematika', description: 'skaiciuosime skaiciukus'},
        { title: 'istorija', description: 'kalbesime apie musu praeiti'},
        { title: 'kalbos gramatika', description: 'ismoksime, taisyklingai rasyti sakinius'}
    ];
    res.render('index', {
        title: 'pagrindinis puslapis',
        lessons: pamokos
    });
}); 

app.get('/apie', (req, res) => {
    // res.sendFile('./views-ejs/apie', {root: __dirname});
    res.render('apie')
});

// vcsUser
// admin123


app.get('/pamokos', (req, res) => {
    //  2 zingsnis
    Lesson.find()
        .then(data => {
               res.render('lessons', {
                lessons: data
            }) 
        })
        .catch(error => console.log(error));
 
});


app.use((req, res) => {
    // res.status(404).sendFile(
    //     './views-ejs/404',
    //     {root: __dirname}
    // );
    res.status(404).render('404');
});
