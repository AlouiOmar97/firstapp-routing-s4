import { Component, ViewChild } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import { Appartement } from '../core/models/appartement';
import { AppartmentCardComponent } from '../appartment-card/appartment-card.component';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
  parentText=""
@ViewChild(AppartmentCardComponent)
private childCard!: AppartmentCardComponent
startP(){
  this.parentText=this.childCard.childText
  this.childCard.displayTextChild()
}
apparList!:Appartement[]
firstVal!: string
newVal:string='';
getNewVal(val:string){
      this.newVal=val;}
constructor(private appartService: AppartementService){}
ngOnInit(){
  this.appartService.findAllAppartments().subscribe((data)=>{
    console.log(data);
    this.apparList= data
  })
}
appart:Appartement=    {id: 1, terrasse: "Terrasse 1", numAppart: 18, numEtage: 0, surface: 500, surfaceTerrasse: 250, category: "category 1", description: "appartement desc 1", status: true ,residence:{
  "id": 1,
  "name": "Residence 1",
  "address": "Address 1",
  "image": "../../assets/images/residence2.jpg"
}}
deleteAppartment(appar: Appartement){
  this.appartService.deleteAppartment(appar.id).subscribe(()=>{
    console.log('appart deleted');
    
  })
}
}
