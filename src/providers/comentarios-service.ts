import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ComentariosService {

  data: any;

  constructor(public http: Http) {
    this.data = null;
    console.log('Hello ComentariosService Provider');
  }

  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }else{
      return new Promise(resolve => {
        this.http.get('./assets/mocks/comentarios.json')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }
  }

}
