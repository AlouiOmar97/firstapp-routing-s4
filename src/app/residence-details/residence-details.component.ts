import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  residence!:Residence
  id!:number
  imageURL="/assets/images/"
  residencesList: Residence[]=[ 

    {id: 1, name: "Residence 1", address: "Address 1", image: this.imageURL+"residence1.jpg"}, 

    {id: 2, name: "Residence 2", address: "Address 2", image: this.imageURL+"residence2.jpg"}, 

    {id: 3, name: "Residence 3", address: "Address 3", image: this.imageURL+"residence3.jpg"} 

  ] 

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.id = this.activatedRoute.snapshot.params['id']
    this.residence= this.residencesList[this.id-1]
  }
}
