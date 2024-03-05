import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appartement } from '../core/models/appartement';

@Component({
  selector: 'app-appartment-card',
  templateUrl: './appartment-card.component.html',
  styleUrls: ['./appartment-card.component.css']
})
export class AppartmentCardComponent {
  childText="child text"
  private prefixedValue = '';
@Input()set initialValue(val:string){ 
  this.prefixedValue="re"+val;
  this.prefixed.emit(this.prefixedValue);​
}
@Output() prefixed = new EventEmitter<string>();​
 
@Input() appartmentC!: Appartement
@Output() deleteE= new EventEmitter<Appartement>()
deleteC(){
  this.deleteE.emit(this.appartmentC)
}
displayTextChild(){
  console.log("child Method");
  
}
}
