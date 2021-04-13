import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  

  transform(value: string): unknown {
    if(!value) return null;
    
    let words = value.split(' ');
    for(var i = 0; i < words.length; i++) {
      let word = words[i];
      if(this.isPreposition(word)&& i > 0)
        words[i] = words[i].toLowerCase();
      else{
        words[i] = this.toTitleCase(word);
      }

    }

    return words.join(' ');
  }

  private toTitleCase(word: string ): string{
    return word.substr(0, 1).toLocaleUpperCase() + word.substr(1).toLocaleLowerCase()
  }

  private isPreposition(word: string): boolean{
    let prepositions = [
      "di", "a", "da", "in", "con", "su", "per", "tra", "fra", "il", "la", "le", "gli", "e", "o", "a"
    ];
    return prepositions.includes(word.toLowerCase()) ;
  }

}
