import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AgendaService {

  data: any;

  constructor(public http: Http) {
    this.data = null;
    console.log('Hello AgendaService Provider');
  }

  

  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise( resolve => {
      this.http.get('./assets/mocks/eventos.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
    
  }

}
