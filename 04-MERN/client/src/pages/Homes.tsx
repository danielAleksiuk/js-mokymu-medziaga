import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import TaskDetails from "../components/TaskDetails";
import Loader from "../components/Loader";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const {data, loading, makeApiCall} = useFetch();
    const [error, setError] = useState(null);
    
    useEffect( () => {
        makeApiCall('http://localhost:4000/api/tasks', 'GET');
    }, []);

    useEffect(() => {
        console.log(data)
        if (data && data.error) {
            setError(data.error);

            return;
        }

        if (data) {
            setTasks(data);
        }
    }, [data])


    return (
        <div className="home">
            <div className="tasks">
                {loading && <Loader text="data is loading"/>}
                {error && <h4>{error}</h4>}
                {tasks && tasks.map((task: any) => (
                    <TaskDetails
                        key={task._id}
                        title={task.title}
                        load={task.load}
                        reps={task.reps}
                        description={task.description}
                        id={task._id}
                        createdAt={task.createdAt}
                    />
                ))}
            </div>
        </div>
    )
};

export default Home;