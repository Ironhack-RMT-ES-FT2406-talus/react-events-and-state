import React from 'react'

function Events() {

  const handleClick = () => {
    console.log("clickando el boton")
  }

  const handleMouseOver = () => {
    console.log("pasando el cursor")
  }

  const handleChange = (event) => {
    // console.log("escribiendo en el input")
    console.log(event.target.value)
  }

  return (
    <div>

      <h1>Aprendiendo eventos en React</h1>

      <button onClick={ handleClick } >Click</button>

      <div onMouseEnter={ handleMouseOver } onMouseLeave={ handleMouseOver }>
        <p>pasa el cursor</p>
      </div>

      <button onDoubleClick={ handleClick } >Click</button>

      <br />

      <input type="text" onChange={ handleChange }/>

    </div>
  )
}

export default Events