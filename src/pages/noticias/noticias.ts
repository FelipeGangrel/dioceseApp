import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NoticiasService } from '../../providers/noticias-service';

import { NoticiaPage } from '../noticia/noticia';

@Component({
    selector: 'page-noticias',
    templateUrl: 'noticias.html',
    providers: [NoticiasService]
})
export class NoticiasPage {
    public noticias: any;

    constructor(public navCtrl: NavController, public noticiasServ: NoticiasService){
      this.carregarNoticias();
    }

    carregarNoticias(){
      this.noticiasServ.load()
        .then(data => {
            this.noticias = data;
        });
    }

    abrirNoticia(noticia: any){
      this.navCtrl.push(NoticiaPage, {
          noticia: noticia
      });
    }
}
