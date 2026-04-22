import { useEffect, useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import useFetch from '../hooks/useFetch';
import { BASE_URL, QUESTION_TIME } from '../utils/constants';
import Score from '../components/Score/Score';
import Pagination from '../components/Pagination/Pagination';
import Question from '../components/Question/Question';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [quizStarted, setQuizStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [time, setTime] = useState(QUESTION_TIME);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const {data, loading, makeApiCall} = useFetch();

    useEffect(() => {
        makeApiCall(BASE_URL + '/quizQuestions');
    }, [])

    useEffect(() => {
        if (data ) {
            setQuestions(data);
        }
    }, [data]);

    useEffect(() => {
        if (quizStarted) {
            const interval = setInterval(() => {
                setTime(prev => {
                    if (prev > 0) {
                        return prev - 1;
                    }

                    if (currentQuestion === questions.length - 1 ) {
                        setQuizStarted(false);
                        setShowScore(true);
                    } else {
                        setCurrentQuestion(currentQuestion + 1 );
                    }

                    return QUESTION_TIME;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [quizStarted, currentQuestion])

    const onStartButtonClick = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizStarted(true);
        setShowScore(false);
        setSelectedAnswer(null);
    }

    const handleNextQuestion = () => {
        if (currentQuestion === questions.length - 1) {
            setQuizStarted(false);
            setShowScore(true);
            return;
        }
        setCurrentQuestion(prev => prev + 1);
    }

    const handleOptionClick = (optionId) => {
        setSelectedAnswer(optionId);
        if (optionId === questions[currentQuestion].answerId) {
            setScore(prev => prev + 1 );
        }
    }

    return (
        <Container>
            <h2>quiz app</h2>
            {loading && (<Spinner animation="grow"/>)}
            { !quizStarted && !showScore && <Button onClick={onStartButtonClick}> Start quiz </Button>}

            { quizStarted && (
                <Container>
                    <Question 
                        seconds={time}
                        questionTitle={questions[currentQuestion].question}
                        questionOptions={questions[currentQuestion].options}
                        handleOptionClick={handleOptionClick}
                        selectedOptionId={selectedAnswer}
                    />
                    <Row>
                        <Col>
                            <Pagination 
                                title="Questions"
                                currentPage={currentQuestion + 1}
                                pageInTotal={questions.length}
                            />
                        </Col>
                        <Col>
                            <Button onClick={handleNextQuestion}>Next question</Button>
                        </Col>
                    </Row>
                </Container>
            )}

            { 
                showScore && <Score 
                    points={score}
                    title="Quiz completed!"
                    restartButtoText="Restart quiz"
                    restartButtonClick={onStartButtonClick}
                /> 
            }
        </Container>
    )
};

export default Quiz;





