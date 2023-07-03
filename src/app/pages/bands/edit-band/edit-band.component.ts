import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Band } from 'src/app/core/models/band.model';
import { BandService } from 'src/app/core/services/band.service';

@Component({
  selector: 'app-edit-band',
  templateUrl: './edit-band.component.html',
  styleUrls: ['./edit-band.component.scss']
})
export class EditBandComponent implements OnInit{

  band_id!: number;
  band?: Band;

  constructor(
    private bandService: BandService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NzNotificationService
  ){
  }

  ngOnInit(): void {
    this.band_id = this.route.snapshot.params["id"];
    if(this.band_id){
      this.getBand();
    }
  }

  async getBand(){
    const band$ = this.bandService.get(this.band_id);
    this.band = await lastValueFrom(band$);
  }

  async save(event:any){
    const bandSave$ = this.bandService.update(this.band_id, event);
    await firstValueFrom(bandSave$).then(result=>{
      this.band = result;
      this.notification.success('Opération terminée', 'Le groupe a bien été mis à jour') // notification
      this.router.navigateByUrl('') // return to list
    })
  }
}
