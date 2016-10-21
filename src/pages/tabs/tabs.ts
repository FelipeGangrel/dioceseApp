import { Component } from '@angular/core';

import { NoticiasPage } from '../noticias/noticias';
import { MissasPage } from '../missas/missas';
import { AgendaPage } from '../agenda/agenda';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NoticiasPage;
  tab2Root: any = MissasPage;
  tab3Root: any = AgendaPage;

  playerVisible: boolean;
  
  constructor() {
    this.playerVisible = false;
  }

  public showHidePlayer(): void{
    console.log('clicou no player!');
    this.playerVisible = this.playerVisible?false:true;
  }

}
