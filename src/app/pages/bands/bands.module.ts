import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { CoreModule } from 'src/app/core';
import { BandFormComponent } from './components/band-form/band-form.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'',
    component: ListComponent
  },
  {
    path:'edit/:id',
    component: EditComponent,
  }
]


@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
    BandFormComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(routes),
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzNotificationModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})

export class BandsModule { }
