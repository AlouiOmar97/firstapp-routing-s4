import { Component } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import { Appartement } from '../core/models/appartement';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
apparList!:Appartement[]
constructor(private appartService: AppartementService){}
ngOnInit(){
  this.appartService.findAllAppartments().subscribe((data)=>{
    console.log(data);
    this.apparList= data
  })
}

deleteAppartment(id:number){
  this.appartService.deleteAppartment(id).subscribe(()=>{
    console.log('appart deleted');
    
  })
}
}
