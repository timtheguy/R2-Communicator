import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InteractPage } from '../interact/interact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  enter(){
    this.navCtrl.setRoot(InteractPage, {}, {animate: true, direction: 'forward'});
  }

}
