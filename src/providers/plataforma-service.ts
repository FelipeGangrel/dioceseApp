import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class PlataformaService {

  constructor(public platform: Platform) {
    console.log('Hello PlataformaService Provider');
  }

  detectaPlataforma(){
    if(this.platform.is('android')){
        return 'android';
    }else if(this.platform.is('ios')){
        return 'ios';
    }else{
        return 'web';
    }
  }

}
