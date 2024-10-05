import { Component } from '@angular/core';
import { isEven } from 'src/assets/functions/NumberEven';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  //Se declara inputNumber de tipo numerico, la cual de declara de tipo numerico
  //Y su valor se asigna en tabs.page.html
  inputNumber: number | undefined;
  isChecked: boolean | undefined;
  //Se crea la variable result de tipo objeto, y cada variable dentro de el es de tipo objeto
  //Guardando en cada una el resultado de la funcion
  result:
    | { even3: number[]; even5: number[]; even7: number[]; notEven: number[] }
    | undefined;

  constructor() {}

  //Se declara getNumbers() de manera local
  getNumbers() {
    //Si inputNumber tiene un valor, se llamara a isEven()
    //Y se enviara esta misma como parametro
    if (this.inputNumber) {
      const result = isEven(this.inputNumber);

      //Para despues, en cada propiedad de result, asignar el valor que
      //Esta regresando la funcion isEven()
      this.result = {
        even3: result.even3,
        even5: result.even5,
        even7: result.even7,
        notEven: result.notEven,
      };
      this.isChecked = false;
      //Despues de mostrar el resultado
      //Se llama la funcion para subirlo a la base de datos


      //Despues de guardar los datos, se activa un Toast de confirmacion
    } else if (!this.inputNumber) {
      this.isChecked = true;
    }
  }
}
