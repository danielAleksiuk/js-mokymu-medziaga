import { useEffect, useState } from "react";

const Timer = ({setTimeIsOver}) => {
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => {
           

                 if (prev > 0) {
                    return prev - 1;
                }

                 

                return 5;
          
            });
          
        }, 1000);

        setTimeout(() => {}, 1000)

        return () => clearInterval(interval);
    },[setTimeIsOver])

    return (
         <p>time remaining: {seconds} sec</p>
    )
};

export default Timer;