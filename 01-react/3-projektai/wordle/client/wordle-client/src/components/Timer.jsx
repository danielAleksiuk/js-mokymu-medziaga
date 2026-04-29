import { useEffect, useState } from "react";

const Timer = ({setTimeIsOver}) => {
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => {
               if (prev < 0 ) {
                setTimeIsOver(true);
                return 5;
               }

               
               return prev - 1
            });
          
        }, 1000);

        return () => clearInterval(interval);
    },[setTimeIsOver])

    return (
         <p>time remaining: {seconds} sec</p>
    )
};

export default Timer;