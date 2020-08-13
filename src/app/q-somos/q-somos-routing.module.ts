import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QSomosPage } from './q-somos.page';

const routes: Routes = [
  {
    path: '',
    component: QSomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QSomosPageRoutingModule {}
