import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts=[];

  constructor() { }
  ondelete(idx:number){
    this.posts.splice(idx,1);
  }

  ngOnInit() {
  }

}
