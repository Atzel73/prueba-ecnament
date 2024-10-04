import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { textInputPage } from './textInput.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { textInputPageRoutingModule } from './textInput-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    textInputPageRoutingModule,
  ],
  declarations: [textInputPage],
})
export class textInputPageModule {}
