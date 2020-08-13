import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QSomosPageRoutingModule } from './q-somos-routing.module';

import { QSomosPage } from './q-somos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QSomosPageRoutingModule
  ],
  declarations: [QSomosPage]
})
export class QSomosPageModule {}
