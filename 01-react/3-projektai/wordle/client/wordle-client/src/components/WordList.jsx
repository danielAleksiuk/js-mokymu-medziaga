import { useEffect } from "react";
import { useState } from "react";
import Wordle from "./Wordle";

const WordList = () => {
    const [solution, setSolution] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/solutions')
            .then(res => res.json())
            .then(json => {
                setSolution(
                    json[Math.floor(Math.random() * json.length)].word
                );
            })
    }, [setSolution])
    return (
        <div className="solution">
            {
                solution && 
                <div> {solution} //// The Word is  <Wordle solution={solution}/></div>
            }
        </div>
    )

}

export default WordList;