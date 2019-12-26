import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalization'
})
export class CapitalizationPipe implements PipeTransform {
    transform(text: string, all: boolean = true): string {

        text = text.toLowerCase();

        let words = text.split(' ');
        
        if (all) {
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
            }
        }
        else {
            words[0] = words[0][0].toUpperCase() + words[0].substr(1);
        }
        

        return words.join(' ');
    }
}