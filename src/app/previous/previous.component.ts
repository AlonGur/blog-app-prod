import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent implements OnInit {
  @Input () previousPage
  @Input () qParams
  previousPageLink
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.previousPageLink=`/posts/${this.previousPage}`
  
  }

}
