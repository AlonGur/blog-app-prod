import { Component, OnInit} from '@angular/core';
import { DataServiceService } from "./data-service.service";
import { PostTitleService } from './post-title.service';
import { PostTitlePipe } from './post-title.pipe';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'BlogProject';
 
  ngOnInit() {
    localStorage.removeItem('myPosts')
    if(!localStorage.getItem('myPosts')){
      this.data.getConfig().subscribe(posts=>{
        posts['posts'].forEach(post=>{
          post['postRoute']=this.ptp.transform(post['title'])
        })
        if(!localStorage.getItem('myPosts')){
          localStorage.setItem('myPosts',JSON.stringify(posts))
        }
      })
      
    }
  }
  constructor(private data: DataServiceService, private pt: PostTitleService, private ptp: PostTitlePipe){}
}
