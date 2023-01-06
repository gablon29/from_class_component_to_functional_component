/**
 * Aqui presentaremos el pasaje de un componente clase usando metodos 
 * como "componentDidMount" y "compoenentWillUnmount" para lograr actualizar 
 * el reloj y a su vez la edad, a un componente funcional usando Hooks "useState"
 * y "useEffect"
 * ? Por donde empoezar
 * * debemos sacar todos los metodos, reemplazarlos por variables 
 * * las referencias a "this" eliminarlas
 */

import React, { useEffect, useState } from 'react'

const Pasaje = () => {
    
  const estadoInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Gabriel',
    apellido: 'Londero'
  }
//* create initial state
  const [changeState, setChangeState] = useState(estadoInicial)
 
//* create de function
  
  const tick = () => {
      setChangeState(() => {
         let edad = changeState.edad +1;
         return {
            ...changeState,
            fecha: new Date(),
            edad
         }
      });
   }
  //* new use the HOOK "useEffect"

  useEffect(() => {
    const timerID = setInterval(() => tick(),1000);
  
    return () => {
      clearInterval(timerID)
    }
  },)
  //* render

  return (
    <div>
      <h1>
        Hora Actual:
        {changeState.fecha.toLocaleString()}
      </h1>
      <h2>
        {changeState.nombre} {changeState.apellido}
      </h2>
      <h1>
       Edad: {changeState.edad}
      </h1>
    </div>
  )
}
export default Pasaje
