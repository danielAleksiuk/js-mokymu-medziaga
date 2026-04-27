import { useEffect, useState } from "react";

const Keypad = () => {
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/letters')
            .then(res => res.json())
            .then(json => setLetters(json));
        }, [])

    return (
        <>
            keypad
            {letters && letters.length}
        </>
    )
};

export default Keypad;