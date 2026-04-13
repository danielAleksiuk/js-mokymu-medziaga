const LabelWithTitle = ({title, body, bodyCSS}) => {
    return (
        <>
            { title && ( <h4>{title}</h4>)}
            { body && ( <p className={bodyCSS}>{body}</p>)}
        </>
    )
};

export default LabelWithTitle;