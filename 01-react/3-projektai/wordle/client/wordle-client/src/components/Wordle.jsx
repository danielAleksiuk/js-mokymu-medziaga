import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import StatusLabel from "./StatusLabel";
import Timer from "./Timer";

const Wordle = ({solution, setSolution, getSolutionValue}) => {
    const [gameFinished, setGameFinished] = useState(false);
    const [timeIsOver, setTimeIsOver] = useState(false);
    const {currentGuess, handleKeyup, turn, guesses, isCorrect, usedKeys, resetValues} =
     useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
        console.log(timeIsOver);
        if (isCorrect || turn > 5 || timeIsOver) {
            window.removeEventListener('keyup', handleKeyup);
            setGameFinished(true);
        }

        return () => window.removeEventListener(
            'keyup', handleKeyup
        );
    }, [handleKeyup, isCorrect, turn, timeIsOver]);

    const onRestartGameHandler = () => {
        resetValues();
        setGameFinished(false);
        const fetchSolution = async () => {
            const result = await getSolutionValue();

            setSolution(result);
        }

        fetchSolution();
    };


     return (
        <>  
        { timeIsOver && "true"}
        { !timeIsOver && "false"}
            current guess - {currentGuess}
            { !gameFinished && (
                <>
                    <Timer setTimeIsOver={setTimeIsOver}/>
                    <Grid 
                        currentGuess={currentGuess}
                        guesses={guesses}
                        turn={turn}
                    />
                    <Keypad usedKeys={usedKeys}/>
                </>
            )}

            { gameFinished && <StatusLabel 
                wordleWord={solution}
                isWinner={isCorrect}
                />
            }

            { gameFinished && <button onClick={onRestartGameHandler}>
                    Restart Game
                </button>
            }
        </>
     )

} 

export default Wordle;