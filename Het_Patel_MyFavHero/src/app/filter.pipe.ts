import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(content: Content[]): any {
    if(!content){
      return content;
    }
    return content.filter((content) => {
      //return item.type?.length;
      return content.type;
  });
 }
}
