import React, { useState } from 'react'
import ListadoListas from "../listadoListas/ListadoListas"
import { isValidChar, isValidList } from '../utils.ts'
import './formularioLista.css'

const FormularioLista = () => {

  const [list , setlist] = useState<string>('')
  const [isCorrectList, setIsCorrectList] = useState(true)
  const [showList, setShowList] = useState(false)

  const onInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {

    setlist(event.target.value)
    isValidChar(event.target.value) 
      ? setIsCorrectList(true) 
      : (setIsCorrectList(false) , setShowList(false))
  }

  const onHandleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    isValidList(list.split(",")) 
      ? (
          setIsCorrectList(true),
          setShowList(true)
        ) 
      : (
        setIsCorrectList(false),
        setShowList(false)
      )
  }

  return (
    <div className='lista'>
      <form
        className='formularioLista'
        onSubmit={onHandleSubmit}
      >
        <input
          type='text'
          value={list}
          placeholder='Introduce los numeros separados por comas (Ej. 1,2,3)'
          onChange={onInputChange} 
        />
        <input
          type='submit'
          value='Comprobar Lista'
          disabled={list==="" || !isCorrectList}
        />
      </form>
      {isCorrectList ? (<p/>) : (<p>Error en la lista, compruebe los valores</p>)}
      {showList && <ListadoListas listado={list.split(',')} />}
    </div>
  )
}

export default FormularioLista

