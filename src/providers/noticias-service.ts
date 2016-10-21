import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NoticiasService {

  data: any;

  constructor(public http: Http) {
    this.data = null;
    console.log('Hello Noticias Service');
  }

  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }else{
      return new Promise(resolve => {
        this.http.get('./assets/mocks/noticias.json')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }
  }





}
