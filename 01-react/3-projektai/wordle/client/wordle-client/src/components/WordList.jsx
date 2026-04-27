import { useEffect } from "react";
import { useState } from "react";
import Wordle from "./Wordle";

const WordList = () => {
    const [solution, setSolution] = useState(null);

    const getSolutionValue = async () => {
        let newValue;

        await fetch('http://localhost:3000/solutions')
            .then(res => res.json())
            .then(json => {
                newValue = 
                    json[Math.floor(Math.random() * json.length)].word
                
            });
        
        return newValue;
    }

     useEffect(() => {
        const fetchSolution = async () => {
            const result = await getSolutionValue();

            setSolution(result);
        }

        fetchSolution();
        
    }, [setSolution]);

    return (
        <div className="solution">
            {
                solution && 
                <div> {solution} //// The Word is 
                    <Wordle    
                        solution={solution}
                        getSolutionValue={getSolutionValue}
                        setSolution={setSolution}
                    />
                </div>
            }
        </div>
    )

}

export default WordList;