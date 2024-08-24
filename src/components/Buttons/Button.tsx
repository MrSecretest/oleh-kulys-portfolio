import '../../App.css';

interface ButtonProps
{
    desc : string,
    onClick?: () => void
}
function Button({desc, onClick}: ButtonProps) {
    return (
        <button className="buttonStyled" onClick={onClick}>{desc}</button>
    );
}

export default Button;
