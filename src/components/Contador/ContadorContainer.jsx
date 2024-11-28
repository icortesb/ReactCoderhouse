import {useState, useEffect} from "react";
import Contador from "./Contador";

const ContadorContainer = () => {
    const [contador, setContador] = useState(0);

    // Se ejecuta solo al montar el componente
    const useEffect =
        (() => {
            const fetchApi = () => {
                fetch("https://fakestoreapi.com/products")
                    .then((res) => res.json)
                    .then((data) => console.log(data));
            };
            fetchApi();
        },
        []);

    const sumar = () => {
        setContador(contador + 1);
        console.log(`Contador: ${contador}`);
    };

    const restar = () => {
        setContador(contador - 1);
        console.log(`Contador: ${contador}`);
    };

    const reset = () => {
        setContador(0);
        console.log(`Contador: ${contador}`);
    };

    return (
        <Contador
            contador={contador}
            sumar={sumar}
            restar={restar}
            reset={reset}
        />
    );
};
export default ContadorContainer;
