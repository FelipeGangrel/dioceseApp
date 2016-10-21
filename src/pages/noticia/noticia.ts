import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { ComentariosService } from '../../providers/comentarios-service';

@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
  providers: [ComentariosService]
})
export class NoticiaPage {

  noticia: any;
  comentarios: any;

  constructor(public navCtrl: NavController, private navPar: NavParams, public comentServ: ComentariosService) {
    this.noticia = null;
    this.comentarios = null;
  }

  ionViewDidLoad() {
    console.log('Hello Noticia Page');
    this.noticia = this.navPar.get('noticia');
    this.carregarComentarios();
  }

  carregarComentarios(){
    this.comentServ.load()
      .then(data => {
        this.comentarios = data;
      });
  }

}
