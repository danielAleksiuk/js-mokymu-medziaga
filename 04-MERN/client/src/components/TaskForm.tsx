import { useEffect, useState } from "react";
import type { Task } from "../types/Task";
import useFetch from "../hooks/useFetch";

type TaskFormProps = {
    action: string;
    task?: Task;
}

const TaskForm = (props: TaskFormProps) => {
    const [task, setTask] = useState<any>();
    const [error, setError] = useState<string>('');
     const {data, loading, makeApiCall} = useFetch();


    useEffect(() => {
        if (props.task) {
            setTask(props.task);
        }
    }, [props])

    const getHTTPMethodByAction = (action: string): string => {
        if (action === 'edit') {
            return 'PATCH';
        }

        if (action === 'new') {
            return 'POST';
        }

        return 'GET';
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let url = 'http://localhost:4000/api/tasks';

        if (props.action === 'edit') {
            url += `/${task.id}`
        }

        makeApiCall(
            url,
            getHTTPMethodByAction(props.action),
            task
        );
        console.log(task)
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h4>Prideti nauja pratima:</h4>
            
            <label htmlFor="title">pratimo pavadinimas</label>
            <input 
                type="text"
                name="title"
                id="title"
                value={task?.title || ''}
                onChange={(e) => setTask(prev => ({
                    ...prev,
                    title: e.target.value
                }))}
            />
            
            <label htmlFor="description">pratimo aprasymas</label>
            <textarea 
                id="description"
                value={task?.description || ''}
                onChange={(e) => setTask(prev => ({
                    ...prev,
                    description: e.target.value
                }))}
            >

            </textarea>

            <label htmlFor="load">pratimo lygis</label>
            <input 
                type="number" 
                name="load" 
                id="load"
                value={task?.load || 0}
                onChange={(e) => setTask(prev => ({
                    ...prev,
                    load: e.target.value
                }))}
            />

            <label htmlFor="reps">pratimo pakartojimas</label>
            <input 
                type="number" 
                name="reps" 
                id="reps"
                value={task?.reps || 0}
                onChange={(e) => setTask(prev => ({
                    ...prev,
                    reps: e.target.value
                }))}
            />

            <button>
                { props.action === 'edit' && 'atnaujink pratimo duomenis'}
                { props.action === 'new' && 'pridek nauja pratima'}
            </button>
        </form>
    )
}

export default TaskForm;