import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hideMe: boolean;
  constructor() {
    this.hideMe = false;
  }
  Hideme(){
    if (this.hideMe) {this.hideMe = false;}
    else {this.hideMe = true;} 
  }
}
