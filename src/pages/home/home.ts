import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public socialSharing:
    SocialSharing) {
  }
  sendShare(message, subject, url) {
    this.socialSharing.share(" D: (From Liliana Osuna Post)", subject, "http://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal.jpg", null);

  }
}
