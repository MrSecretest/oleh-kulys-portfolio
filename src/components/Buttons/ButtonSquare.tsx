import '../../App.css';

interface ButtonProps
{
    rotationIndex: number,
    onClick?: () => void
}
function ButtonSquare({rotationIndex = 0, onClick}: ButtonProps) {


    return (
        <div className='buttonStyled buttonStyledSquare'
             style={{ transform: `rotate(${rotationIndex * 90}deg)`}}
             onClick={onClick}>
            <img src="../../media/arrow.png" alt="arrow"/>
        </div>
    );
}

export default ButtonSquare;
