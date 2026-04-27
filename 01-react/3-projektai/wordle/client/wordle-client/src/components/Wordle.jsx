import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import StatusLabel from "./StatusLabel";

const Wordle = ({solution, setSolution, getSolutionValue}) => {
    const [gameFinished, setGameFinished] = useState(false);
    const {currentGuess, handleKeyup, turn, guesses, isCorrect, usedKeys, resetValues} =
     useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect || turn > 5) {
            window.removeEventListener('keyup', handleKeyup);
            setGameFinished(true);
        }

        return () => window.removeEventListener(
            'keyup', handleKeyup
        );
    }, [handleKeyup, isCorrect, turn]);

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
            current guess - {currentGuess}
            { !gameFinished && (
                <>
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