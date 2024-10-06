import { Component } from '@angular/core';
import { isEven } from 'src/assets/functions/NumberEven';
import { addResultEven } from 'src/assets/functions/postDataFirebase';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private firestore: AngularFirestore) {}

  inputNumber: number | undefined;
  isChecked: boolean | undefined;
  isEmpty: boolean | undefined;
  isError: boolean = false;
  vuelta: number = 0;
  result:
    | { even3: number[]; even5: number[]; even7: number[]; notEven: number[] }
    | undefined;

  getNumbers() {
    if (this.inputNumber) {
      const result = isEven(this.inputNumber);

      this.result = {
        even3: result.even3,
        even5: result.even5,
        even7: result.even7,
        notEven: result.notEven,
      };
      this.vuelta += 1;
      this.isChecked = false;
      this.isError = true;
      this.saveEven(this.result, this.vuelta);

      //Despues de guardar los datos, se activa un Toast de confirmacion
    } else if (!this.inputNumber) {
      this.isChecked = true;
    }
  }

  //Funcion para borrar/vaciar el inputNumber
  eraseButton() {
    if (this.inputNumber) {
      this.inputNumber = undefined;
      this.isEmpty = false;
      this.isError = false;
      this.isChecked = false;
      this.result = undefined;
    } else {
      this.isEmpty = true;
    }
  }

  //Funcion para guardar los datos en la base de datos
  async saveEven(data: any, vuelta: number) {
    await addResultEven(this.firestore, data, vuelta);
    this.isError = true;
  }
}
