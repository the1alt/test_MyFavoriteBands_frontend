import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { CoreModule } from 'src/app/core';
import { BandFormComponent } from './components/band-form/band-form.component';
import { CreateBandComponent } from './create-band/create-band.component';
import { EditBandComponent } from './edit-band/edit-band.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'',
    component: ListComponent
  },
  {
    path:'create',
    component: CreateBandComponent,
  },
  {
    path:'edit/:id',
    component: EditBandComponent,
  }
]


@NgModule({
  declarations: [
    ListComponent,
    CreateBandComponent,
    EditBandComponent,
    BandFormComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(routes),
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzPopconfirmModule,
    NzNotificationModule,
    NzUploadModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})

export class BandsModule { }
