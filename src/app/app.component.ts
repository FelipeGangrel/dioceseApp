import { Component } from '@angular/core';
import { App, MenuController, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';



@Component({
  templateUrl: `app.html`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, app: App, menu: MenuController) {

    menu.enable(true);
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    
  }
}
