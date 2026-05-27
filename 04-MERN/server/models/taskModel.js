import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true});

export default mongoose.model(
    'Task',
    taskSchema
);