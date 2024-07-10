import { useState } from 'react'
// useState es una funcion de react para crear estados en componentes

function Counter() {

  // let counterValue = 0
  const [ valorDelContador, funcionQueActualizaContador ] = useState( 0 )
  //          |               |                       |
  //  nombre del estado       |                       |
  //                  funcion que actualiza el estado | 
  //                                        el valor inicial del estado


  const handleSumar = () => {
    // console.log("intentando sumar")
    // counterValue = counterValue + 1
    // console.log(counterValue)

    
    // como actualizamos el estado?
    funcionQueActualizaContador( valorDelContador + 1 )
    // 1. actualiza el valor de counterValue
    // 2. indica a React que hubo cambio en el estado y cause la renderización nueva del componente, con el nuevo valor
  }

  const handleRestar = () => {
    // valorDelContador++
    //! EN REACT NUNCA DEBEMOS MODIFICAR EL ESTADO DIRECTAMENTE

    funcionQueActualizaContador( valorDelContador - 1 )
  }

  const [ valorGuardado, setValorGuardado ] = useState(null)

  const handleGuardarValor = () => {
    setValorGuardado(valorDelContador)
  }

  return (
    <div>
      
      <h2>Contador</h2>

      <h1>{valorDelContador}</h1>

      <button onClick={ handleRestar }>restar</button>
      <button onClick={ handleSumar }>sumar</button>

      <br />

      <button onClick={handleGuardarValor}>Guardar valor</button>

      <p>Valor almacenado: {valorGuardado}</p>

    </div>
  )
}

export default Counter