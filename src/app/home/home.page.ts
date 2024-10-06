import { Component, NgModule } from '@angular/core';

import { isEven } from 'src/assets/functions/NumberEven';
import { addResultEven } from 'src/assets/functions/postDataFirebase';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {}

  // inputNumber: Número que se inicializa como indefinido para evitar mostrar 0 en pantalla.
  // vuelta: Contador de sesiones.
  // result: Objeto que almacena los resultados de números pares.
  inputNumber: number | undefined;
  vuelta: number = 0;
  result:
    | { even3: number[]; even5: number[]; even7: number[]; notEven: number[] }
    | undefined;

  async getNumbers() {
    // Si inputNumber tiene valor, procesa el número.
    if (this.inputNumber) {
      // Se asignan los resultados obtenidos de isEven() a result.
      const result = isEven(this.inputNumber);

      this.result = {
        even3: result.even3,
        even5: result.even5,
        even7: result.even7,
        notEven: result.notEven,
      };

      // Incrementa el contador de vueltas y guarda el resultado en Firestore.
      this.vuelta += 1;
      await this.saveEven(this.result, this.vuelta);
    } else {
      // Muestra un mensaje pidiendo ingresar un número.
      const toast = await this.toastController.create({
        message: 'Por favor, agregue un numero',
        duration: 2000,
      });
      toast.present();
    }
  }

  // Limpia el input y los resultados.
  async eraseButton() {
    if (this.inputNumber) {
      this.inputNumber = undefined;
      this.result = undefined;
      const toast = await this.toastController.create({
        message: 'Pantalla limpia',
        duration: 2000,
      });
      toast.present();
    } else {
      // Muestra un mensaje pidiendo ingresar un número antes de vaciar.
      const toast = await this.toastController.create({
        message: 'Antes de vaciar, asegurate de agregar un numero',
        duration: 2000,
      });
      toast.present();
    }
  }

  // Guarda los resultados en Firestore.
  async saveEven(data: any, vuelta: number) {
    try {
      // Guarda los datos en Firestore y muestra confirmación.
      await addResultEven(this.firestore, data, vuelta);
      const toast = await this.toastController.create({
        message: '¡Datos guardados!',
        duration: 2000,
      });
      toast.present();
    } catch (error) {
      // Muestra error al guardar.
      console.error('Error al guardar los datos:', error);
      const toast = await this.toastController.create({
        message: '¡Error al guardar los datos!',
        duration: 2000,
      });
      toast.present();
    }
  }
}
