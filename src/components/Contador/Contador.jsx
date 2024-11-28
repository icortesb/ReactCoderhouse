const Contador = ({contador, sumar, restar, reset}) => {
    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};
export default Contador;
