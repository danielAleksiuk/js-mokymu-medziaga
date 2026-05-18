const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.set('views', './views-ejs')
app.use(express.static(__dirname));
// app.use(express.urlencoded({extended: true}))

const port = 3000;

app.listen(3000);

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

app.use((req, res) => {
    // res.status(404).sendFile(
    //     './views-ejs/404',
    //     {root: __dirname}
    // );
    res.status(404).render('404');
});

// vcsUser
// admin123