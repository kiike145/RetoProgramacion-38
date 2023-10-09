const isValidList = (lista : Array<string>) => {

	let isValid
	lista.forEach(i => {
		Number.isInteger(parseInt(i)) ? isValid = true : isValid = false
		console.log(i)
	})
	return isValid
}

const isValidChar = (lista : string) => {
	for (const char of lista) {
		
		const charCode = char.charCodeAt(0);

    if (charCode !== 44 && (charCode < 48 || charCode > 57)) {
      return false; // Carácter no válido, devuelve false
    }
  }
  return true; // Todos los caracteres son válidos, devuelve true
}


// char.charCodeAt(char.length-1) === 44 || char.charCodeAt(char.length-1) > 47 && char.charCodeAt(char.length-1) < 58 ? null : break


export {
	isValidList,
	isValidChar
}


