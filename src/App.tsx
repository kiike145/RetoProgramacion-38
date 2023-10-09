import './App.css'

import FormularioNumero from './components/formularioNumero/FormularioNumero'
import FormularioLista from './components/formularioLista/FormularioLista'


const App = () => {
  return (
    <>
      <h1>Reto de programacion 38</h1>
      <p>Crea una función que encuentre todas las combinaciones de los números de una lista que suman el valor objetivo.</p>
      <div className='reto'>
        <FormularioLista/>
        <FormularioNumero/>
      </div>
    </>
  )
}

export default App