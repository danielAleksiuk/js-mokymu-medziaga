const Lesson = require('../models/lesson');

const lesson_add = (req, res) => {
    const newLesson = new Lesson({
        name: 'biologija',
        description: 'bla bla bla',
        minNumberOfStudent: 5
    });

    newLesson.save()
        .then(result => res.send(result))
        .catch(error => console.log(error));
};

const lesson_all = (req, res) => {
    Lesson.find()
        .then(result => res.render('index', {
                title: 'mano pirmas db response',
                lessons: result})
                //res.send(result)
        )
        .catch(error => console.log(error))
};

const lesson_delete =  (req, res) => {
    const id = req.params.id;

    Lesson.findByIdAndDelete(id)
        .then(result => res.send(result))
        .catch(error => console.log(error));
};

const lesson_update =  (req, res) => {
    const id = req.params.id;
    const body = {name: 'random name'};

    Lesson.findByIdAndUpdate(id, body)
        .then(result => res.send(result))
        .catch(error => console.log(error));
};


module.exports = {
    lesson_add,
    lesson_all,
    lesson_delete,
    lesson_update
}