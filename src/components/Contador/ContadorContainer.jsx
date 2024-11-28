import {useState} from "react";
import Contador from "./Contador";

const ContadorContainer = () => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1)
        console.log(`Contador: ${contador}`);
    };

    const restar = () => {
        setContador(contador - 1);
        console.log(`Contador: ${contador}`);
    }

    const reset = () => {
        setContador(0);
        console.log(`Contador: ${contador}`);

    }

    return (
        <Contador contador={contador} sumar={sumar} restar={restar} reset={reset}/>
    );
};
export default ContadorContainer;