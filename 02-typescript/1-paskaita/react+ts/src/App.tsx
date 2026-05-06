import { useState } from "react"
import { type Studentas }  from "./types/Studentas";
import Information from "./components/Information";


function App() {
  const [studentai, setStudentai] = useState<Studentas[]>([
    { id: 111, vardas: 'jonas', kursas: 2, arAkademines: false},
    { id: 131, vardas: 'petras', kursas: 1, arAkademines: true, pazymiai: [4,5,7]},
    { id: 141, vardas: 'mindaugas', kursas: 5, arAkademines: false},
    { id: 161, vardas: 'donaldas', kursas: 6, arAkademines: true},
    { id: 171, vardas: 'michael', kursas: 3, arAkademines: false},
    // { id: 12}
  ]);
  const [inc, setInc] = useState<number>(0);

  const onPlusClick = (): void => {
    setInc(getIncValue() + 1);
  }

  const getIncValue = (): number => {
    return inc;
  }

  const onActionClick = (operation: string): void => {
    switch(operation) {
      case '+':
        setInc(prev => prev + 1);
        break;
      case '-': 
        setInc(prev => prev - 1);
        break;
      default:
        return;
    }
  }

  const getStudentasAvgPazymiai = (id: number): number => {
    const pazymiai = studentai.find((studentas: Studentas) => studentas.id === id)?.pazymiai;

    if (!pazymiai) {
      return 0;
    }

    let suma: number = 0;
    pazymiai.forEach((pazymis: number) => {
      suma += pazymis;
    });

    return (suma / pazymiai.length);
  }

  return (
    <>
      <h1>typescript + react example</h1>
      <p>{inc}</p>
      <button onClick={() => onActionClick('+')}>plus</button>
      <button onClick={() => onActionClick('-')}>minus</button>

      { studentai.map(studentas => (
        <>
          <Information
            kursas={studentas.kursas}
            vardas={studentas.vardas}
            pavarde='aa'/>
          <h4>ar mokosi? {studentas.arAkademines ? 'ne' : 'taip'}</h4>
          { studentas.pazymiai && (
              getStudentasAvgPazymiai(studentas.id)
            )
          }
        </>
      ))}
    </>
  )
}

export default App
