import { Component, OnInit, Input } from '@angular/core';
import { PostTitleService } from '../post-title.service'
import {GetPostService} from '../get-post.service'
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute,Router } from '../../../node_modules/@angular/router';
import { PostTitlePipe } from '../post-title.pipe';
import { MarkdownToHtmlModule } from '../../../node_modules/markdown-to-html-pipe';
import { post } from '../../../node_modules/@types/selenium-webdriver/http';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  myPost
  myPostIndex
  allPosts
  @Input ()myPostTitle
  markDown
  myPipe
  myRoute



  clickHandler(e){
    console.log('clicked',e, this.myPostTitle)
  }

  insertPost(){
    var target=document.querySelector('.postWrapper')
    target.innerHTML=this.myPost;
    console.log('THIS IS THE POST TARGET:', target)
  }
  saveChanges(e){
    let postAfterChanges={
      title: <HTMLInputElement>document.querySelector('.title'),
      author: <HTMLInputElement>document.querySelector('.author'),
      date: <HTMLInputElement>document.querySelector('.date'),
    }
   
    this.allPosts.posts[this.myPostIndex]['title']=postAfterChanges.title
    this.allPosts.posts[this.myPostIndex]['author']=postAfterChanges.author
    this.allPosts.posts[this.myPostIndex]['date']=postAfterChanges.date
    console.log( 'about to post this:',this.allPosts)
    this.data.putConfig(this.allPosts.posts[this.myPostIndex])
    localStorage.setItem('myPosts', JSON.stringify(this.allPosts))

    console.log(this.allPosts)
  }
  constructor( private PT: PostTitleService, private GP: GetPostService, private data: DataServiceService,
              private route: ActivatedRoute, private tPipe: PostTitlePipe, private htmlPipe: MarkdownToHtmlModule,
              private router: Router
        ) { }

  ngOnInit() {
  this.myPostTitle= this.route.snapshot.params.post
 
   
   this.allPosts=JSON.parse(localStorage.getItem('myPosts'))
   console.log('in post editor:', this.myPostTitle, this.PT.getTitle(), this.allPosts)
   this.myPost=this.allPosts['posts'].filter((post,ind,arr)=>{
    // console.log('filtering', post, ind)
      if(post['title']===this.PT.getTitle()){
        this.myPost=post;
        this.myPostIndex=ind
        return true
      }
      else{
        return false
      }
     
   })[0]
     console.log('after filtering:', this.myPost,this.myPostIndex)
   
   console.log('VVVVVVVV',this.myPost)
   if(!this.myPost){
     console.log('no post found')
   }

    this.GP.getPostMd(this.myPost['title']).subscribe(postMD=>{
      this.markDown=postMD;
     //this.myPipe=this.htmlPipe
     
     // this.html= this.htmlPipe.transform(postMD)
    })

  

  //   this.myPostTitle=this.PT.getTitle();
  //   console.log('IN POST EDITOR', this)
  //   this.GP.getPostMd(this.myPostTitle).subscribe(post=>{
  //     this.myPost=post;
  //     this.insertPost();
  //     //console.log('IN POST EDITOR', this)
  // })
}

}
