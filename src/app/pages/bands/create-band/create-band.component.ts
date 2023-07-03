import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom } from 'rxjs';
import { Band } from 'src/app/core/models/band.model';
import { BandService } from 'src/app/core/services/band.service';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.scss']
})
export class CreateBandComponent implements OnInit{

  band?: Band;
  
  constructor(
    private bandService: BandService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NzNotificationService
  ){
  }

  ngOnInit(): void {

  }


  async save(event:any){
    const bandSave$ = this.bandService.create(event);
    await firstValueFrom(bandSave$).then(result=>{
      this.band = result;
      this.notification.success('Opération terminée', 'Le groupe '+this.band.name+' a bien été mis à jour') // notification
      this.router.navigateByUrl('') // return to list
    })
  }
}
