import { useState } from "react";
import TaskForm from "./TaskForm";

type TaskDetailsProps = {
    title: string;
    load: number;
    reps: number;
    description: string;
    id: string
    createdAt: string;
}



const TaskDetails = (props: TaskDetailsProps) => {
    const [isEditVisible, setIsEditVisible] = useState<boolean>(false);

    const onDelteButtonClick = (id: string) => {
        console.log(id)
    }

    const onEditButtonClick = (id: string) => {
        setIsEditVisible(prev => !prev);
    }


    return (
        <div className="task-details">
            { !isEditVisible &&  (
                <>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <p>Level: {props.load}</p>
                    <p>Pasikartojimai: {props.reps}</p>
                    <p>Sukurimo data: { new Date(props.createdAt).toLocaleString()}</p>
                    <button onClick={() => onDelteButtonClick(props.id)}>delete</button>
                </>
            )}
            {
                isEditVisible && <TaskForm 
                    action="edit"
                    task={props}
                />
            }
            <button onClick={() => onEditButtonClick(props.id)}>
                {isEditVisible && 'cancel'}
                {!isEditVisible && 'edit'}
            </button>
            <hr/>
        </div>
    )
}

export default TaskDetails;


// update veiksmui naudojam taskForm componenta
// per propsa ? 
//  update
//  create