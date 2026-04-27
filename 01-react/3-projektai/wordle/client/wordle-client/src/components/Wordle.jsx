import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({solution}) => {
    const {currentGuess, handleKeyup, turn, guesses, isCorrect, usedKeys} =
     useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect || turn > 5) {
            window.removeEventListener('keyup', handleKeyup);
        }

        return () => window.removeEventListener(
            'keyup', handleKeyup
        );
    }, [handleKeyup, isCorrect, turn]);

   
     return (
        <>
            current guess - {currentGuess}
            <Grid 
                currentGuess={currentGuess}
                guesses={guesses}
                turn={turn}
            />
            <Keypad usedKeys={usedKeys}/>
        </>
     )

} 

export default Wordle;