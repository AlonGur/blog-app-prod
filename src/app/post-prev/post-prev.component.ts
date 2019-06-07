import { Component, OnInit , Input, HostListener} from '@angular/core';
import { PostTitleService } from '../post-title.service'

@Component({
  selector: 'app-post-prev',
  templateUrl: './post-prev.component.html',
  styleUrls: ['./post-prev.component.scss']
})
export class PostPrevComponent implements OnInit {
  @Input () post
  postKeys=[]
 
  titleHandler(){
    //set title here
    console.log('SETTING TITLE!!!!')
    this.PT.setTitle(this.post.title)
    console.log('TITLE SET TO:' , this.PT.getTitle())
  }
  constructor(private PT: PostTitleService) { }

  ngOnInit() {
    console.log('IIIIIIII', this.post)
    for(let key in this.post){
      this.postKeys.push(key)
    }
    // console.log('BBBBB', this.post['tags'])
  }

}
