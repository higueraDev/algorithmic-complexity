/**
 * Complejidad Temporal -> O(n)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 */
function linearSearch(arreglo, clave) { // esp: O(n)
	for (let indice = 0; indice < arreglo.length; indice++) { // O(n) esp:O(1)

		if (arreglo[indice] === clave) { // O(1)
			// O(1)
			return indice; // O(1)
		}
	}
	return -1; // O(1)
}
