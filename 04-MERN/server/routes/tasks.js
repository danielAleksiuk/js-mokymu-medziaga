import express from 'express';
import Task from '../models/taskModel.js'
import taskController  from '../controllers/taskController.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();
router.use(requireAuth);
router.get('/', taskController.taskGet);
router.get('/:id', taskController.taskGetbyId);
router.post('/', taskController.taskPost);
router.delete('/:id', taskController.taskDelete);
router.patch('/:id', taskController.taskPatch);

export default router;