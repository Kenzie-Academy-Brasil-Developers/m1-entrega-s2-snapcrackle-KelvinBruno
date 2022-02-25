function snapCrackle(valorMaximo) {
  let frase = "";
  for (let i = 1; i <= valorMaximo; i++) {
    if (i % 2 != 0 && i % 5 != 0) {
      frase += " Snap,";
    }
    if (i % 5 == 0 && i % 2 == 0) {
      frase += " Crackle,";
    }
    if (i % 2 != 0 && i % 5 == 0) {
      frase += " SnapCrackle,";
    }
    if (i % 2 == 0 && i % 5 != 0) {
      frase += " " + i + ",";
    }
  }
  return frase;
}

function primos(a) {
  for (let i = 2; i < a; i++){
    if (a % i === 0) {
      return false;
    }}
  return a > 1;
}

function snapCracklePrime(valorMaximo) {
  let primo = null;
  let frase = "";
  for (let i = 1; i <= valorMaximo; i++) {
    primo = primos(i);
    if (i % 2 != 0 && i % 5 != 0) {
      if (primo == true) {
        frase += " SnapPrime,";
      } else {
        frase += " Snap,";
      }
    }
    if (i % 5 == 0 && i % 2 == 0) {
      frase += " Crackle,";
    }
    if (i % 2 != 0 && i % 5 == 0) {
      if (primo == true) {
        frase += " SnapCracklePrime,";
      } else {
        frase += " SnapCrackle,";
      }
    }
    if (i % 2 == 0 && i % 5 != 0) {
      if (primo == true) {
        frase += " Prime,";
      } else {
        frase += " " + i + ",";
      }
    }
  }
  return frase;
}
