import { useState } from "react";

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [history, setHistory] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [usedKeys, setUsedKeys] = useState({});

    const formatGuess = () => {
        // let solutioArray = [...solution];
        let solutionArray = [...solution];

        // refactor it 
        // let formatttedGuess = [...currentGuess]
        //     .map(letter => {
        //         return {key: letter, color: 'grey'}
        //     });
        
        // formatttedGuess.forEach((letter, index) => {
        //     if (solutioArray[index] === letter.key) {
        //         formatttedGuess[index].color = 'green';
        //         solutioArray[index]= null;
        //     }
        // });

        // formatttedGuess.forEach((letter, index) => {
        //     if (solutioArray.includes(letter.key) && 
        //     letter.color !== 'green') {
        //         formatttedGuess[index].color = 'yellow';
        //         solutioArray[
        //             solutioArray.indexOf(letter.key)
        //         ] = null;  
        //     }
        // });

        let formatttedGuess = [...currentGuess].map((letter, index) => {
            let color = 'grey';
            
            if (solutionArray[index] === letter) {
                color = 'green';
                solutionArray[index] = null;
            } else if (solutionArray.includes(letter)) {
                color = 'yellow';
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            }

            return {key: letter, color: color}
        });
        
        return formatttedGuess;
    }

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }  

        setGuesses((prev) => {
            let newValue = [...prev];
            newValue[turn] = formattedGuess;

            return newValue;
        });

        setHistory((prev => [...prev, currentGuess]));

        setTurn((prev) => prev + 1 );

        setCurrentGuess('');

        setUsedKeys((prev) => {
            let newKeys = {...prev};

            // refactor it
            formattedGuess.forEach((letter) => {
                const currentColor = newKeys[letter.key];

                if (letter.color === 'green') {
                    newKeys[letter.key] = 'green';
                    return;
                }

                if (letter.color === 'yellow' && currentColor != 'green') {
                    newKeys[letter.key] = 'yellow';
                    return;
                }

                if (letter.color === 'grey' 
                    && currentColor != 'green'
                    && currentColor != 'yellow') {
                    newKeys[letter.key] = 'grey';
                    return;
                }
            });

            return newKeys;
        });
    }

    const handleKeyup = ({key}) => {
        if (key === 'Enter') {
            if (turn > 5 || 
                history.includes(currentGuess) ||
                currentGuess.length !== 5) {
                return;
            }

            const formatted = formatGuess();
            addNewGuess(formatted);
            console.log(formatted);
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key);
            }
        }
    }




    return (
        {turn, currentGuess, guesses, history,isCorrect, handleKeyup, usedKeys}
    )
}

export default useWordle;