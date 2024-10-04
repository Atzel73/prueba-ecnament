import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { textInputPage } from '../textInput/textInput.page';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    // children: [
    //   {
    //     path: 'text-input',
    //     loadChildren: () =>
    //       import('../textInput/textInput.module').then(
    //         (m) => m.textInputPageModule
    //       ),
    //   },
    //   {
    //     path: 'tab1',
    //     loadChildren: () =>
    //       import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
    //   },
    //   {
    //     path: 'tab2',
    //     loadChildren: () =>
    //       import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
    //   },
    //   {
    //     path: 'tab3',
    //     loadChildren: () =>
    //       import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/tabs/pagina-principal',
    //     pathMatch: 'full',
    //   },
    // ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
