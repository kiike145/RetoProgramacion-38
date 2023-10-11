import React from 'react'

import {findCombinacions , removeDuplicates} from "../utils"

const ListadoResultados = ({ listado, resultado }: { listado: string; resultado: string }) => {

	const calcularResultados = (listado: string, resultado: string) => {
		
		const listaCombinaciones:number[][] = [] 

		for (let i = 0; i < listado.split(",").length; i++) {
			findCombinacions(i , 0 , [] , parseInt(resultado) , listaCombinaciones , listado.split(","))
		}

		return removeDuplicates(listaCombinaciones);
	}


	return (
    <ul>
      {
				calcularResultados(listado, resultado).map((n, i) => (
					<li key={i}>{n.join('-')}</li>
				))
			}
    </ul>
	)
}

export default ListadoResultados