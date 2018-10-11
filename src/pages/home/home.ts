import { FormModalPage } from './../form-modal/form-modal';
import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { Post } from './../../models/posts.model';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:Array<Post> = [
    { 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/220px-Angular_full_color_logo.svg.png",
      title: "Angular",
      description: "Framework coté client open source basé sur TypeScript dirigée par l'équipe du projet Angular à Google.",
      create_at: "2018-05-16T05:55:13Z"
    },
    { 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
      title: "ReactJS",
      description: "Une bibliothèque JavaScript libre développée par Facebook depuis 2013.",
      create_at: "2018-10-20T07:26:13Z"
    },
    { 
      img: "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/104/thumb_bigger_formation-vue-js.png",
      title: "VueJS",
      description: "Vue.js est un framework JavaScript open-source pour la construction d'interfaces utilisateur. ",
      create_at: "2018-09-18T08:43:13Z"
    },
  ]

  //isIos:boolean = true;

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public platform:Platform) {
    //this.isIos = (this.platform.is('ios')) ? true : false;
  }

  addPost(){
    let modalForm = this.modalCtrl.create(FormModalPage);
    modalForm.present();
  }

}
