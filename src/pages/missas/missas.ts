import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

@Component({
    selector: 'page-missas',
    templateUrl: 'missas.html'
})
export class MissasPage{
    constructor(public navCtrl: NavController, menu: MenuController){

    }
}