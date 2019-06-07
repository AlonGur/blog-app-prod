import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostTitleService {
  postTitle=''
  setTitle(title){
    this.postTitle=title
  }
  getTitle(){
    return this.postTitle
  }
  constructor() { }
}
