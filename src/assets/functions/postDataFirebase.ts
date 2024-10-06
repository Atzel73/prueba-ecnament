import { AngularFirestore } from '@angular/fire/compat/firestore';

//Recibe como parametros la isntancia de firestore,
//data como objeto con los resultados
//y vuelta, como contador
export async function addResultEven(
  firestore: AngularFirestore,
  data: any,
  vuelta: number
): Promise<void> {
  //se declara un nuevo arreglo, al cual se le asigna todo el objeto data,
  //Ademas de la variable vuelta
  let dataResult = {
    vuelta: vuelta,
    ...data,
  };
  try {
    //Despues, se añade a la coleccion en Firebase "number-even"
    await firestore.collection('number-even').add(dataResult);
    console.log('Dato guardado exitosamente en Firestore');
  } catch (error) {
    console.error('Error al guardar el dato en Firestore: ', error);
  }
}
