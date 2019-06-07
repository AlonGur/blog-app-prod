import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataServiceService} from '../data-service.service'
import { PostTitleService} from '../post-title.service'
import { GetPostService } from '../get-post.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  myPostTitle
  myPost
  myPostURL = `../../assets/blogData/posts/html/${this.PT.getTitle()}`
  //myPostURL = `../../assets/blogData/posts/html/jQuery%20-%20Selectors,%20DOM.html`
 

  // getPost(){
  //   return this.http.get(this.myPostURL);
  // }
  insertPost(){
    var target=document.querySelector('.postWrapper')
    target.innerHTML=this.myPost;
    console.log('THIS IS THE POST TARGET:', target)
  }
  
  constructor(private router: Router, private data: DataServiceService, private PT: PostTitleService,
             private http: HttpClient, private GP: GetPostService) { }
  
  ngOnInit() {
    console.log('IN POSTTTT', this)
   this.myPostTitle=this.PT.getTitle();
   this.GP.getPostHtml(this.myPostTitle).subscribe(post=>{
     this.myPost=post;
     this.insertPost();

   })
  
   //this.myPost= this.data.myData.filter(post=> post['title']==this.myPostTitle)[0]
 
  

  }

  ngAfterViewInit(){
//  this.insertPost();
  }

}
