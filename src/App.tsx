import './App.css'

import FormularioNumero from './components/formularioNumero/FormularioNumero'
import FormularioLista from './components/formularioLista/FormularioLista'
import ListadoResultados from './components/listadoResultados/ListadoResultados'
import { useEffect, useState } from 'react';

const App = () => {
  const [listado, setListado] = useState(sessionStorage.getItem("listado") || '');
  const [resultado, setResultado] = useState(sessionStorage.getItem("resultado") || '');
  const [mostrarResultados, setMostrarResultados] = useState<boolean>()

  useEffect(() => {
    (listado !== '' && resultado !== '') ? setMostrarResultados(true) : setMostrarResultados(false)    
  }, [listado , resultado]);

  const onHandleClick = () => {
    setListado(sessionStorage.getItem("listado") || '');
    setResultado(sessionStorage.getItem("resultado") || '')
  }

  return (
    <>
      <h1>Reto de programacion 38</h1>
      <p>Crea una función que encuentre todas las combinaciones de los números de una lista que suman el valor objetivo.</p>
      <div className='reto'>
        <div className='forms'>
          <FormularioLista/>
          <FormularioNumero/>
        </div>
        <button onClick={onHandleClick}>Calcular restulatos</button>
        {mostrarResultados ? <ListadoResultados listado={listado} resultado={resultado} /> : null}
      </div>
    </>
  )
}

export default App