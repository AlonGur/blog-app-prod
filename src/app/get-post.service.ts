import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPostService {

  getPostHtml(title){
    return (this.http.get(`../../assets/blogData/posts/html/${title}.html`,{responseType: 'text'}))
  }
  getPostMd(title){
    return (this.http.get(`../../assets/blogData/posts/md/${title}.md`,{responseType: 'text'}))
  }
 
  

  constructor(private http: HttpClient) { }

  ngOnInit(){

  }
}
