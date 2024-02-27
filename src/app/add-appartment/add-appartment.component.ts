import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';
import { AppartementService } from '../services/appartement.service';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
addAppForm!:FormGroup
residence : Residence= {id: 1, name: "Residence 1", address: "Address 1", image:"image 1"}
appartment: Appartement={
  
 id: 0,

 numAppart: 0,

 numEtage: 0,

 surface: 0,

 terrasse: "", 

 surfaceTerrasse: 0,

 category: "", 

 description: "", 

 residence: this.residence, 

 status: true 

}

ngOnInit(): void{
  this.addAppForm= new FormGroup({
    terasse:   new FormControl(this.appartment.terrasse,[Validators.required, Validators.minLength(3)]),
    numAppart: new FormControl(this.appartment.numAppart,  [Validators.required, Validators.min(0)])
  })
}
constructor(private appartService : AppartementService){}
get terasse(){return this.addAppForm.get('terasse')}
get numAppart(){return this.addAppForm.get('numAppart')}

addApp(){
  console.log("Click");
  console.log(this.addAppForm.value);
  this.appartService.addAppartment(this.addAppForm.value).subscribe(()=>{
    console.log("added appartment");
    
  })
  
}

}