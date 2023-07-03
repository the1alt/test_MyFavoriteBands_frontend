import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Band } from 'src/app/core/models/band.model';
import { BandService } from 'src/app/core/services/band.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  fileList: NzUploadFile[] = [];
  bands: Band[] = [];
  fileUploading: boolean = false;
  uploadAdress?: string=`${environment.apiUrl}/band/import`;

  constructor(
    private bandService: BandService,
    private router: Router,
    private notification: NzNotificationService
  ){}

  ngOnInit(): void {
    this.getBands();
  }

  async getBands(){
    const bands$ = this.bandService.list();
    this.bands = await lastValueFrom(bands$);
  }
  
  createBand(){
    this.router.navigateByUrl(`create`)
  }
  
  editBand(band_id: number){
    this.router.navigateByUrl(`edit/${band_id}`)
  }
  
  async deleteBand(band: Band){
    const deleteBand$ = this.bandService.delete(band.id);
    firstValueFrom(deleteBand$).then(()=>{
      this.getBands(); // reload bands
      this.notification.success('Opération terminée', `Le groupe ${band.name} a bien été supprimé`) // notification
    })
  }
  
  importBands(event:NzUploadChangeParam){
    
    this.fileUploading = true; // prevent multiple call when uploading file

    if (event.file.status !== 'uploading') {
      console.log(event.file, event.fileList);
    }
    
    if (event.file.status === 'done') {
      this.fileList = []; // clean the file upload list
      this.getBands(); // reload bands
      this.notification.success('Opération terminée', `le fichier ${event.file.name} a bien été téléversé`); // Success notification
      this.fileUploading = false; // liberate button

    } else if (event.file.status === 'error') {
      
      this.fileList = []; // clean the file upload list
      this.notification.error('Erreur', `le téléversement du fichier ${event.file.name} à échoué.`); // Error notification
      this.fileUploading = false; // liberate button

    }
  }
}
