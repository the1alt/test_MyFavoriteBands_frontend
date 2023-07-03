import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Band } from 'src/app/core/models/band.model';

@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.scss']
})
export class BandFormComponent implements OnInit{

  @Input() band?: Band;
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  bandForm?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.setForm(this.band);
  }

  setForm(band?: Band){
    // Band form instanciation
    this.bandForm = this.fb.group({
      name:[band ? band.name : null, Validators.required],
      origin:[band ? band.origin : null],
      city:[band ? band.city : null],
      start:[band ? band.start : null],
      split:[band ? band.split : null],
      founders:[band ? band.founders : null],
      members_count:[band ? band.members_count : null],
      style:[band ? band.style : null],
      description:[band ? band.description : null],
    })
  
    // If a band is present, we populate the form
    if(band){
      this.bandForm.patchValue(band);
    }
  }

  save(){
    let _band = this.bandForm?.getRawValue();
    this.onSave.emit(_band);
  }

  goToList(){
    this.router.navigateByUrl('') // return to list
  }
}
