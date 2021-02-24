const Button = ({text, cls, clickevnt}) => {

    

    return (
        <button onClick={clickevnt} className={cls}>{text}</button>
    )
}

Button.defaultProps = {
    text: 'Button',
    cls: 'my-btn',
}

export default Button
