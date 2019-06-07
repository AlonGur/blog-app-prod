import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  sortInfo={}
  getInfo(){
    return this.sortInfo
  }
  setInfo(cat, item){
    const obj={}
    const key= cat
    obj[key]=item
    this.sortInfo=obj
    return this.sortInfo
  }
  constructor() { }
}
