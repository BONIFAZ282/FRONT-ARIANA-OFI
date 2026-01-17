// src/app/modules/cargos/cargos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CargosComponent } from './cargos.component';
import { CargoService } from '../../auth/services/cargo.service';

const routes: Routes = [
  { path: '', component: CargosComponent }
];

@NgModule({
  declarations: [
    CargosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CargoService
  ]
})
export class CargosModule { }