import express from "express";
import Task from "../models/taskModel.js";
const router = express.Router();
//all tasks
const taskGet =
  ("/",
  async (req, res) => {
    const tasks = await Task.find({}).sort({ createdAt: -1 });
    res.json(tasks);
  });
//get task id
const taskGetbyId =
  ("/:id",
  async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  });
// create task
const taskPost =
  ("/",
  async (req, res) => {
    const { title, reps, desc, load } = req.body;
    try {
      const newTask = await Task.create({ title, reps, desc, load });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
//delete task
const taskDelete =
  ("/:id",
  async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(task);
  });
//update task
const taskPatch = ("/:id", async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(task);
});

export default { taskGet, taskGetbyId, taskPost, taskDelete, taskPatch };