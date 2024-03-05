import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';
import { AppartementService } from '../services/appartement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-appartment',
  templateUrl: './update-appartment.component.html',
  styleUrls: ['./update-appartment.component.css']
})
export class UpdateAppartmentComponent {
  updateAppForm!:FormGroup
  residence : Residence= {id: 1, name: "Residence 1", address: "Address 1", image:"../../assets/images/residence2.jpg"}
  appartment!: Appartement
  id!: number
  
  ngOnInit(): void{
    this.id= this.activatedRoute.snapshot.params['id']
    console.log(this.id);
    
    this.appartService.findAppartmentById(this.id).subscribe((data)=>{
      this.appartment= data
      console.log(data);
      
      this.updateAppForm= new FormGroup({
        terrasse:   new FormControl(this.appartment.terrasse,[Validators.required, Validators.minLength(3)]),
        numAppart: new FormControl(this.appartment.numAppart,  [Validators.required, Validators.min(0)])
      })
    })
    
  }
  constructor(private appartService : AppartementService, private router: Router, private activatedRoute: ActivatedRoute){}
  get terrasse(){return this.updateAppForm.get('terrasse')}
  get numAppart(){return this.updateAppForm.get('numAppart')}
  
  updateApp(){
    console.log("Click");
    console.log(this.updateAppForm.value);
    this.updateAppForm.value.residence=this.residence
    this.appartService.updateAppartment(this.id,this.updateAppForm.value).subscribe(()=>{
      console.log("updated appartment");
      this.router.navigateByUrl("/appartment")
      
    })
    
  }
  
}
