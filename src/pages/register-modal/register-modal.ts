import { Component } from '@angular/core';
import { Platform, ViewController, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the RegisterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-modal',
  templateUrl: 'register-modal.html',
})
export class RegisterModalPage {
//Nos champs saisis
user:any = {email: "", password: "", name: "Loc"}
isIos:boolean = true;
error:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public platform: Platform) {
    this.isIos = (this.platform.is('ios')) ? true : false;
    //Double ternaire :  this.isIos = (this.platform.is('ios')) ? true : (this.platform.is('android')) ? false : true;
    
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModalPage');
  }

  closeModal(){ 
    this.viewCtrl.dismiss();
  }

  registerUser(){
    if(this.user.email.trim() == "" || this.user.password.trim() == "" || this.user.name.trim() == ""){
      this.error = "Entrez tous les champs";
    } else{

      //Récupérer des localStorage
      let users:any = localStorage.getItem("users");
      if(users == null){
        users = []
      }else{
        users = JSON.parse(users);
      }
      users.push(this.user);
      localStorage.setItem("users", JSON.stringify(users));
      this.closeModal(); //Appel la fonction qui va dismiss()
    }

    //this.error = "Entrez tous les champs";

  }
}
 