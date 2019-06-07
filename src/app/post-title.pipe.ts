import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postTitle'
})
export class PostTitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var myArr=value.split(' ')
    // console.log('BBBBB', myArr)
    var myArr=myArr.filter(word=> word!='-')
    // console.log('CCCCCCC', myArr)
    var newStr=myArr.join('-')
    return newStr;
  }

}
