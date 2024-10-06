export function isEven(n: number) {
  //Se declaran las variables de tipo arreglo para almacenar
  //Los numeros que cumplan con la condicion
  let even3 = [];
  let even5 = [];
  let even7 = [];
  let notEven = [];

  //Se usa un ciclo for para dar las vueltas en base al numero
  //Entrante por parametro
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0) {
      even3.push(index);
    }
    if (index % 5 === 0) {
      even5.push(index);
    }
    if (index % 7 === 0) {
      even7.push(index);
    }
    if (index % 3 !== 0 && index % 5 === 0 && index % 7 === 0) {
      notEven.push(index);
    }
  }
  return { even3, even5, even7, notEven };
}
