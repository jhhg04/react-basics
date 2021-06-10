import React, {useState} from 'react'

export default function ContadorHooks(props){
    const [contador, setContador] = useState(0)
    // console.log(useState())

    const add = () => setContador(contador + 1)
    const subtract = () => setContador(contador - 1)

    return(
        <>
            <h2>Hooks -UseState</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
            </nav>
            <p>Contador de {props.title}</p>
            <h3>{contador}</h3>
        </>
    )
}

ContadorHooks.defaultProps = {
    title:"Clicks"
}