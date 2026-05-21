const express = require('express');
const lessonController = require('../controller/lessonController');
const router = express.Router();

router.get('/addLesson', lessonController.lesson_add);
router.get('/allLessons', lessonController.lesson_all);
router.delete('/lesson/:id', lessonController.lesson_delete);
router.put('/lesson/:id', lessonController.lesson_update);

module.exports = router;