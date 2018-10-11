import { Component } from '@angular/core';
import { Platform, ModalController, ViewController, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the FormModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form-modal',
  templateUrl: 'form-modal.html',
})
export class FormModalPage {

  user:any = {username: "", textarea: ""}
  img:string;
  error:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public viewCtrl:ViewController, public platform:Platform, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormModalPage');
  }

  closeModal(){ 
    this.viewCtrl.dismiss();
  }

  registerPost(){
    if(this.user.username.trim() == "" || this.user.textarea.trim() == ""){
      this.error = "Entrez tous les champs";
    } else{

      //Récupérer des localStorage
      let posts:any = localStorage.getItem("posts");
      if(posts == null){
        posts = []
      }else{
        posts = JSON.parse(posts);
      }
      posts.push(this.user);
      localStorage.setItem("posts", JSON.stringify(posts));
      this.closeModal(); //Appel la fonction qui va dismiss()
    }

    //this.error = "Entrez tous les champs";

  }

  shootPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }



}
