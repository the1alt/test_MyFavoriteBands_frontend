import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core';

const routes: Routes = []


@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class BandsModule { }
