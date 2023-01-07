function rot13(str) {
  
   const rot13Table = {
    A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V',
    J: 'W', K: 'X', L: 'Y', M: 'Z', N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E',
    S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M'
  };
  
   let result = '';
  for (const cif of str) {
    
    if (/[A-Z]/.test(ch)) {
      result += rot13Table[cif];
    }else {
      result += cif;
    }
  }

  return result;
}

console.log(rot13("UBYN ZHAQB"))
