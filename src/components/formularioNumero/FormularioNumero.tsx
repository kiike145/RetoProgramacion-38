import { useState } from "react"
import { isValidOption } from "../utils"

const FormularioNumero = () => {

  const [isCorrectOption, setIsCorrectOption] = useState<boolean>(false)
  const [isOptionReady, setIsOptionReady] = useState<boolean>(false)
  const [option, setOption] = useState<string>(sessionStorage.getItem("resultado") || '')

  const onInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value)
    isValidOption(event.target.value) ? setIsCorrectOption(true) : setIsCorrectOption(false)
  }

  const onHandleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sessionStorage.setItem("resultado" , option)
    setIsOptionReady(true)
  }

  return (
    <div className='formObjetivo'>
      <form onSubmit={onHandleSubmit}>
        <input
          type='text'
          value={option}
          placeholder='Introduce el numero objetivo'
          onChange={onInputChange} 
          disabled={isOptionReady}
        />
        <input
          type='submit'
          value='Añadir objetivo'
          disabled={option==="" || !isCorrectOption}
        />
      </form>
    </div>
  )
}

export default FormularioNumero