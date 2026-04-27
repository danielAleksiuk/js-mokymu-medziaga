const StatusLabel = ({wordleWord, isWinner}) => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Wordle word was {wordleWord}</h1>

            { isWinner && (
                <h2>
                    yay!!! you are the winner
                </h2>
            )}

            { !isWinner && (
                <h2>
                    sad news!!! maybe lucky next time?
                </h2>
            )}
        </div>
    )
}

export default StatusLabel;