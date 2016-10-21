import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { NoticiasPage } from '../pages/noticias/noticias';
import { MissasPage } from '../pages/missas/missas';
import { AgendaPage } from '../pages/agenda/agenda';
import { NoticiaPage } from '../pages/noticia/noticia';

import { EmojiPipe } from '../pipes/emoji-pipe';

import { EmojiService } from '../providers/emoji-service';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    NoticiasPage,
    MissasPage,
    AgendaPage,
    TabsPage,
    NoticiaPage,
    EmojiPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NoticiasPage,
    MissasPage,
    AgendaPage,
    TabsPage,
    NoticiaPage
  ],
  providers: [EmojiService]
})
export class AppModule {}
