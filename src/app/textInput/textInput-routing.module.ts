import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { textInputPage } from './textInput.page';

const routes: Routes = [
  {
    path: '',
    component: textInputPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class textInputPageRoutingModule {}
