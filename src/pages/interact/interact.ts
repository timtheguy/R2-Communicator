import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SWapi } from '../../providers/swapi/swapi';

/**
 * Generated class for the InteractPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-interact',
  templateUrl: 'interact.html',
})
export class InteractPage {

  public audio : any;
  public message : string = "Select an option!";

  constructor(public navCtrl: NavController, public navParams: NavParams, public swapi: SWapi) {
  }

  ionViewDidLoad() {
    this.playR2sound();
    console.log('ionViewDidLoad InteractPage');
  }

  playR2sound(){
    var audio = new Audio();
    audio.src = "assets/sounds/sound" + this.swapi.getRandomInt(1,4) + ".mp3";
    audio.load();
    audio.play();
  }

  getShips(){
    this.playR2sound();
    this.swapi.getShip()
       .subscribe(
         body => {
           this.message = "The <b>" + body.name + "</b> (" + body.model + ") is <b>" + body.length + " meters long</b>, and requires a crew of <b>" + body.crew + " member(s)</b> to operate. ";
         },
         error =>  console.log(<any>error));
  }

  getPlanets(){
    this.playR2sound();
    this.swapi.getPlanet()
       .subscribe(
         body => {
           this.message = "The planet <b>" + body.name + "</b> is  <b>" + body.climate + " in climate</b> with a <b>terrain that is " + body.terrain + ".</b> It has a diameter of <b>" + body.diameter + " kilometers.</b>";
         },
         error =>  console.log(<any>error));
  }

  getSpecies(){
    this.playR2sound();
    this.swapi.getSpecies()
       .subscribe(
         body => {
           this.message = "The species <b>" + body.name + "</b> is classified as <b>" + body.classification + "</b>. The language spoken by this species is <b>" + body.language + "</b>.";
         },
         error =>  console.log(<any>error));
  }

  getPerson(){
    this.playR2sound();
    this.swapi.getPerson()
       .subscribe(
         body => {
           this.message = "<b>" + body.name + "</b> is a <b>" + body.gender + "</b> with skin that is <b>" + body.skin_color + "</b>." ;
         },
         error =>  console.log(<any>error));
  }

}
