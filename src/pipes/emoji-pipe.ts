import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { EmojiService } from '../providers/emoji-service';

@Pipe({
  name: 'emoji'
})
@Injectable()
export class EmojiPipe implements PipeTransform{
  emojiData: any;

  constructor(public emojiServ: EmojiService){
    this.emojiData = null;
    this.loadEmojiData();
  }

  loadEmojiData(){
    this.emojiServ.load()
      .then( data =>{
        this.emojiData = data;
      });
  }

  getEmojiDetail(shortname: string): string{
    for (let key in this.emojiData){
      let item = this.emojiData[key];
      if(item.shortname === shortname){
        console.log(item.unicode);
        return item.unicode;
      }
    }
  }

  transform(value, args) {
    value = value + '';
    let reg = new RegExp(/:\w+:/g);
    let result;
    while((result = reg.exec(value)) !== null){
      let emoji = result[0];
      let unicode = this.getEmojiDetail(emoji);
  
      let emojiClass = 'emojione emojione-'+unicode;
      let novoValor = value.replace(emoji, `<i class="${emojiClass}"></i>`);
      value = value.replace(value, novoValor);
    }

    return value;
  }
}
