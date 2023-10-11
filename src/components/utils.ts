const isValidList = (lista : Array<string>) => {

	let isValid
	lista.forEach(i => Number.isInteger(parseInt(i)) ? isValid = true : isValid = false)
	return isValid
}

const isValidChar = (lista : string) => {
	for (const char of lista) {
    if (char.charCodeAt(0) !== 44 && (char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57)) {
      return false;
    }
  }
  return true;
}

const isValidOption = (lista : string) => { 
	for (const char of lista) {
    if (char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57) {
      return false;
    }
  }
  return true;
}

const findCombinacions = (ini: number, currentSum: number, combinacion: number[], numResultado: number, listaCombinaciones: number[][], lista: string[]) => {
  if (currentSum === numResultado) {
    listaCombinaciones.push([...combinacion]);
    return;
  }
  if (currentSum > numResultado) {
    return;
  }
  for (let i = ini; i < lista.length; i++) {
    combinacion.push(parseInt(lista[i]));
    findCombinacions(i + 1, currentSum + parseInt(lista[i]), combinacion, numResultado, listaCombinaciones, lista);
    combinacion.pop();
  }
}

const removeDuplicates = (listaCombinaciones: number[][]) => {
  const arraySinDuplicados: number[][] = [];
  const combinacionesStrings: string[] = [];

  for (let elemento of listaCombinaciones) {
    const elementoString = JSON.stringify(elemento);
    if (!combinacionesStrings.includes(elementoString)) {
      combinacionesStrings.push(elementoString);
      arraySinDuplicados.push(elemento);
    }
  }

  return arraySinDuplicados;
}



export {
	isValidList,
	isValidChar,
	isValidOption,
  findCombinacions,
  removeDuplicates
}


