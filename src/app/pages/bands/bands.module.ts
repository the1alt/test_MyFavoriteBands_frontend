import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CoreModule } from 'src/app/core';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'',
    component: ListComponent
  }
]


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(routes),
    NzIconModule
  ],
  exports: [RouterModule]
})

export class BandsModule { }
