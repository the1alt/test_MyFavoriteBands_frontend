import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Band } from 'src/app/core/models/band.model';
import { BandService } from 'src/app/core/services/band.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  bands: Band[] = []

  constructor(
    private bandService: BandService,
  ){}

  ngOnInit(): void {
    this.getBands();
  }

  async getBands(){
    const bands$ = this.bandService.list();
    this.bands = await lastValueFrom(bands$);
  }
  
  editBand(band_id: number){
    console.log('editBand '+band_id);
  }
  
  deleteBand(band_id: number){
    console.log('deleteBand '+band_id);
  }
  
  importBands(){
    console.log('importBands');
  }
  
  createBand(){
    console.log('createBand');
  }
}
