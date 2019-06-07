import { Component, OnInit, Input } from '@angular/core';
import {Router, Event,NavigationStart, NavigationEnd, NavigationError, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {
  @Input () nextPage
  @Input () qParams
  
  nextPageLink

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.nextPageLink= `/${this.route.url['value'][0].path}/${this.nextPage}`
    console.log( 'MY QUERY PARAMSSSSS', this.route.url['value'][0].path,this.route.queryParams, this.qParams['_value'])

  }


}
