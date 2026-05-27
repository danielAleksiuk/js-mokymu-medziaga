import { useEffect, useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect( () => {

        const getData = async () => {
            await fetch('http://localhost:4000/api/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(e => console.log(e));
        };

        getData();

    }, []);


    // gauna - URL, httpMetoda (get post, delete, patch)
    // return data, loader, metodaApi



    return (
        <div className="home">
            <div className="tasks">
                {tasks && tasks.map((task: any) => (
                    <p key={task._id}>
                        {task.title}
                    </p>
                ))}
            </div>
        </div>
    )
};

export default Home;