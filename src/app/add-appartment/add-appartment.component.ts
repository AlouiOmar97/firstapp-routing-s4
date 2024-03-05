import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';
import { AppartementService } from '../services/appartement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
addAppForm!:FormGroup
residence : Residence= {id: 1, name: "Residence 1", address: "Address 1", image:"../../assets/images/residence2.jpg"}
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
    terrasse:   new FormControl(this.appartment.terrasse,[Validators.required, Validators.minLength(3)]),
    numAppart: new FormControl(this.appartment.numAppart,  [Validators.required, Validators.min(0)])
  })
}
constructor(private appartService : AppartementService, private router: Router){}
get terrasse(){return this.addAppForm.get('terrasse')}
get numAppart(){return this.addAppForm.get('numAppart')}

addApp(){
  console.log("Click");
  console.log(this.addAppForm.value);
  this.addAppForm.value.residence= this.residence
  this.appartService.addAppartment(this.addAppForm.value).subscribe(()=>{
    console.log("added appartment");
    this.router.navigateByUrl("/appartment")
    
  })
  
}

}