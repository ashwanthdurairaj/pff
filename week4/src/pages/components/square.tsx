interface squareProps {

    value : ('X' | 'O' | null);
    onSquareClick : () => void;
}

const Square: React.FC<squareProps> = ({value, onSquareClick}) => {

    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}
export default Square