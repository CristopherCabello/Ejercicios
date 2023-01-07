function telephoneCheck(str) {
  // elimina todos los caracteres no numéricos de la cadena
  str = str.replace(/[^\d]/g, '');
  // verifica si la cadena tiene una longitud válida para un número de teléfono de EE. UU.
  if (str.length < 10 || str.length > 11) return false;
  // si la cadena tiene 11 dígitos, verifica que el primer dígito sea 1
  if (str.length === 11 && str[0] !== '1') return false;
  // verifica que todos los dígitos sean números válidos
  for (const ch of str) {
    if (ch < '0' || ch > '9') return false;
  }
  // si se han pasado todas las verificaciones, se devuelve true
  return true;
}

console.log(telephoneCheck("555-555-5555"))
