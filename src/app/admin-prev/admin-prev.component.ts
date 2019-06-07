import { Component, OnInit , Input} from '@angular/core';
import {PostTitleService} from '../post-title.service'

@Component({
  selector: 'app-admin-prev',
  templateUrl: './admin-prev.component.html',
  styleUrls: ['./admin-prev.component.scss']
})
export class AdminPrevComponent implements OnInit {
  @Input () post
  @Input () myIndex
  
  titleHandler(e){
    //set title here
    console.log('SETTING TITLE!!!!')
    this.PT.setTitle(this.post.title)
    console.log('TITLE SET TO:' , this.PT.getTitle())
  }
  constructor(private PT:PostTitleService) { }

  ngOnInit() {
    
  }

}
