import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController } from 'ionic-angular';

import {HomePage} from '../home/home';
import { RegisterModalPage } from '../register-modal/register-modal'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  object:any = "Tout est rien mais surtout object";
  user:any = {username: "", password: ""}
  number:number = 22;
  string:string = "Chaine de caractère";
  boolean:boolean = false;
  arrayNb:Array<number> = [28,6,1994];
  array:Array<any> = [this.object, this.user, this.number, this.string, this.boolean];
  error:string;

  david:string = "GG";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
    public loadingCtrl: LoadingController) {

  }

  submitForm(){

  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  
    loading.onDidDismiss(() => {
      this.error = "Votre username/password est erroné";
    });
  
    loading.present();

    let users:any = localStorage.getItem("users");
    if(users == null){
      users = []
    }else{
      users = JSON.parse(users);
    }

    for(let i = 0; i < users.length; i++){
      if (this.user.username == users[i].email && this.user.password == users[i].password){
        this.error = "Sa marche";
        //loading.dismiss();
        this.navCtrl.setRoot(HomePage); 
      }
    }
    loading.dismiss();  
    
    /* if (this.user.username == "dax" && this.user.password == "dax"){
      this.error = "Sa marche";
      this.navCtrl.setRoot(HomePage);
    }else{ 
      this.error = "Votre username/password est erroné"
    } 
    console.log(this.array)*/
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad LoginPage');
  }

  openModalRegister(){
    let modalRegister = this.modalCtrl.create(RegisterModalPage);
    modalRegister.present();
  }

}
