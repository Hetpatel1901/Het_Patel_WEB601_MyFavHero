import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
 
  @Input() content?: Content;
  private _item: Content[];
  constructor() {
    this._item=[];
  }

  getItem(): Content[] {
    return this._item;
  }

  pritnItem() {
    console.log(this.content?.id);
    console.log(this.content?.title);
    console.log(this.content?.description);
    console.log(this.content?.creator);
  }

clickphoto(id: number, title: string){
  console.log(`content id: ${id}, title: ${title}`);
}

clickphoto2(){
  console.log(`Content ID: ${this.content?.id} Title: ${this.content?.title}`);
}

  ngOnInit(): void {
  }
  
}