import { useState } from "react"

import todosLosPersonajes from "../data/allWizards.json"
// console.log(todosLosPersonajes)

function Wizards() {

  const [ personajes, setPersonajes ] = useState( [] )

  const handleAgregarPersonaje = () => {

    const randomIndex = Math.floor(Math.random() * todosLosPersonajes.length)
    const randomPersonajeArr = todosLosPersonajes.splice(randomIndex, 1)
    const personajeParaAñadir = randomPersonajeArr[0]
    
    // creamos un clone del array para no modificar directamente el estado

    // const clone = personajes.slice(0, personajes.length) // clonando el array
    // const clone = personajes.map((eachPersonaje) => eachPersonaje) // clonando el array
    const clone = JSON.parse( JSON.stringify( personajes ) ) // clonando el array

    //* "[8, 10, 20]" // parse => [8, 10, 20]
    //* [8, 10, 20] // stringify =>  "[8, 10, 20]"

    clone.push(personajeParaAñadir)

    setPersonajes( clone )

  }

  const handleBorrarPersonaje = ( indexABorrar ) => {

    console.log("tratando de eliminar", indexABorrar)

    // como obtenemos el personaje que queremos eliminar
    // como lo borramos el estado

    const clone = JSON.parse( JSON.stringify( personajes ) ) 
    clone.splice(indexABorrar, 1)

    // como actualizamos el estado
    setPersonajes(clone)



  }

  return (
    <div>
      
      <h1>Personajes de Harry Potter</h1>

      <button onClick={ handleAgregarPersonaje }>Añadir personaje</button>

      {personajes.map((cadaPersonaje, index) => {
        return (
          <div className='card'>

            <h3>Nombre: {cadaPersonaje.name}</h3>
            <p>Descripción: {cadaPersonaje.description}</p>
            <button onClick={ () => handleBorrarPersonaje(index) }>Borrar</button>

          </div>
        )
      })}

    </div>
  )
}

export default Wizards