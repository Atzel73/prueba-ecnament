import { AngularFirestore } from '@angular/fire/compat/firestore';

export async function addResultEven(
  firestore: AngularFirestore,
  data: any,
  vuelta: number
): Promise<void> {
  let dataResult = {
    vuelta: vuelta,
    ...data,
  };
  try {
    await firestore.collection('number-even').add(dataResult);
    console.log('Dato guardado exitosamente en Firestore');
  } catch (error) {
    console.error('Error al guardar el dato en Firestore: ', error);
  }
}
