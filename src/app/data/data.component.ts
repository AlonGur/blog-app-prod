import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})


export class DataComponent implements OnInit {
 
  private _jsonURL = 'assets/blogData/posts.json';
  myData: Object;
  constructor(private http: HttpClient) {
    
    this.getJSON().subscribe(data => {
      console.log(data);
      this.myData=data.posts
     });
   }

   public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit() {
  }

}
