import { useEffect, useRef, useState } from "react";

function Irasai() {
    const [irasai, setIrasai] = useState([]);

    const formosRef = useRef(null);

    // Funkcija, kuri callina API ir gauna irasus
    const gautiIrasus = async () => {
        const res = await fetch('http://localhost:3005/irasai');
        const data = await res.json();

        // Atnaujinam irasu state su gautu rezultatu is API
        setIrasai(data);
    };

    // Kai baigia nusipiesti komponentas, kvieciam gautiIrasus
    useEffect(() => {
        gautiIrasus();
    }, []);

    const pridetiIrasa = async () => {
        const irasoPavadinimas = formosRef.current.irasas.value;

        if(!irasoPavadinimas) return;

        await fetch('http://localhost:3005/irasai', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                pavadinimas: irasoPavadinimas,
                perziuros: 0,
                patiktukai: 0
            })
        });

        formosRef.current.irasas.value = '';
        gautiIrasus();        
    }

    const istrintiIrasa = async (id) => {
        await fetch('http://localhost:3005/irasai/' + id, {
            method: "DELETE"
        });
        gautiIrasus();
    }

    const patiko = async (irasas) => {
        await fetch('http://localhost:3005/irasai/' + irasas.id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                patiktukai: irasas.patiktukai + 1
            })
        });
        gautiIrasus();
    }

    return (
        <div>
            <h2>Irasai</h2>
            {irasai.map((irasas) => (
                <div key={irasas.id}>
                    <h3>{irasas.pavadinimas}</h3>
                    <p>Patiktukai: {irasas.patiktukai} <button type="button" onClick={() => patiko(irasas)}>Patiko</button></p>
                    <button type="button" onClick={() => istrintiIrasa(irasas.id)}>Istrinti</button>
                </div>
            ))}
            <hr></hr>
            <form ref={formosRef}>
                <input type="text" placeholder="iraso pavadinimas" name="irasas"/>
                <button type="button" onClick={pridetiIrasa}>Prideti</button>
            </form>
        </div>
    )
}

export default Irasai;