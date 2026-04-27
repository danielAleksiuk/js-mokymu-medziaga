import { Button } from "react-bootstrap";

// const Score = ({
//     points, 
//     restartButtonClick, 
//     restartButtoText,
//     title
// }) => { 
//     return (
//         <>
//             <h2>{title}</h2>
//             <p>your Score is: {points} points</p>
//             <Button 
//                 variant="danger"
//                 onClick={restartButtonClick}
//             >
//                 {restartButtoText}
//             </Button>
//         </>
//     )
// }

const Score = (props) => { 
    return (
        <div className="text-center">
            <h2>{props.title}</h2>
            <p>your Score is: {props.points} points</p>
            <Button 
                variant="danger"
                onClick={props.restartButtonClick}
            >
                {props.restartButtoText}
            </Button>
        </div>
    )
}

export default Score;