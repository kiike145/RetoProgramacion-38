import React, { useState } from 'react'
import ListadoListas from "../listadoListas/ListadoListas"
import { isValidChar, isValidList } from '../utils.ts'

const FormularioLista = () => {

  const [list , setlist] = useState<string>(localStorage.getItem("listado") || '')
  const [isCorrectList, setIsCorrectList] = useState<boolean>(true)
  const [showList, setShowList] = useState<boolean>(false)
  const [listReady, setListReady] = useState<boolean>(false)

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
          setShowList(true),
          setListReady(true),
          localStorage.setItem("listado" , list)
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
          disabled={listReady}
        />
        <input
          type='submit'
          value='Añadir Lista'
          disabled={list==="" || !isCorrectList}
        />
      </form>
      {isCorrectList ? (<p/>) : (<p className='msgeError'>Error en la lista, compruebe los valores</p>)}
      {showList && <ListadoListas listado={list.split(',')} />}
    </div>
  )
}

export default FormularioLista

