import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({solution}) => {
    const {currentGuess, handleKeyup, turn, guesses, iscCorrect} =
     useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener(
            'keyup', handleKeyup
        );
    }, [handleKeyup]);

    useEffect(() => {
        console.log(guesses, turn, iscCorrect);
    }, [guesses, turn, iscCorrect]);
    
     return (
        <>
            current guess - {currentGuess}
            <Grid 
                currentGuess={currentGuess}
                guesses={guesses}
                turn={turn}
            />
            <Keypad/>
        </>
     )

} 

export default Wordle;