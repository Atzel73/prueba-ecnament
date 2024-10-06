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
  isSuccess: boolean = false;
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
      this.isError = false;
      this.isSuccess = false;
      this.saveEven(this.result, this.vuelta);
    } else {
      this.isChecked = true;
    }
  }

  eraseButton() {
    if (this.inputNumber) {
      this.inputNumber = undefined;
      this.isEmpty = false;
      this.isError = false;
      this.isSuccess = false;
      this.isChecked = false;
      this.result = undefined;
    } else {
      this.isEmpty = true;
    }
  }

  async saveEven(data: any, vuelta: number) {
    try {
      await addResultEven(this.firestore, data, vuelta);
      this.isError = false;
      this.isSuccess = true;
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      this.isError = true;
      this.isSuccess = false;
    }
  }
}
