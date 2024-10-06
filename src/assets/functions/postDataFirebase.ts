import { AngularFirestore } from '@angular/fire/compat/firestore';

export async function addResultEven(
  firestore: AngularFirestore,
  data: any
): Promise<void> {
  let vuelta = 0;
  try {
    vuelta = vuelta + 1;
    data.push(vuelta);
    await firestore.collection('number-even').add(data);
    console.log('Dato guardado exitosamente en Firestore');
  } catch (error) {
    console.error('Error al guardar el dato en Firestore: ', error);
  }
}
