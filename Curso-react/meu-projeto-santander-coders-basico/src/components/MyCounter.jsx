import { useState } from "react"; /* hook */
import styles from './button.module.css' // Importei o modulo de css

export default function MyCounter() {
    const [count, setCount] = useState(0)  //retorno dela é um array com 2 posições, (variável de estado e função)

    function increment() {
        setCount(count + 1); // Chamando essa função que define o estado, minha variável count vai sendo alterada
    }

    function decrement(){
        setCount(count -1);

    }

    // Posso fazer um if antes caso queira, e definir um return diferente para o componente (Posso por exemplo, verificar se ainda está fazendo requisição e retornar somente um load)

    return (
        <div>
            <h1>My Count</h1>
            { count > 9 ? <h2>Bigger then nine</h2> : <h2>Lees than nine</h2> } {/* Aqui renderiza condicionalmente */}
            <h3>{count}</h3>
            <button onClick={increment} className={styles.myButton}>increment</button>{/*  eu pego exatamente a classe que quero dentro do css */}
            <button onClick={decrement} className={styles.myButton}>decrement</button>
        </div>
    )
}