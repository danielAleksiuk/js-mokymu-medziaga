import { Button } from "react-bootstrap";

const Question = (props) => {
    return (
        <>
            <p>time remaining: {props.seconds} sec</p>
            <h3>{props.questionTitle}</h3>
            <div className="list-group">
                {
                    props.questionOptions.map((option, index) => (
                        <Button
                            key={index}
                            className={`m-1 ${props.selectedOptionId === option.id ?  'active' : ''}`}
                            onClick={() => props.handleOptionClick(option.id)}
                        >
                            {option.value}
                        </Button>
                    ))
                }
            </div>
        </>
    )
};

export default Question;