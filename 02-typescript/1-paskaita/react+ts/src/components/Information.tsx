type InformationProps = {
    vardas: string;
    kursas: number;
    pavarde: string;
}

const Information = (props: InformationProps) => {
    return (
        <>
            <h2>vardas: {props.vardas}</h2>
            <h4>kursas: {props.kursas}</h4>
        </>
    )
}

export default Information;