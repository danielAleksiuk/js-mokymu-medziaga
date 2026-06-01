type TaskDetailsProps = {
    title: string;
    load: number;
    reps: number;
    description: number
    id: string
    createdAt: string;
}

const TaskDetails = (props: TaskDetailsProps) => {
    return (
        <div className="task-details">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <p>Level: {props.load}</p>
            <p>Pasikartojimai: {props.reps}</p>
            <p>Sukurimo data: { new Date(props.createdAt).toLocaleString()}</p>
            <hr/>
        </div>
    )
}

export default TaskDetails;