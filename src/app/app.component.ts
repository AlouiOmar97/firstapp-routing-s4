import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BI7';
  test='This is text'
  nb=8
  msg=""
  methodeA(){ return 2}
  afficherMsg(){
    this.msg="This is a new msg"
  }

}
