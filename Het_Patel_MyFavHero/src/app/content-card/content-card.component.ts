import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  myhero : ContentList = new ContentList();

  hero1 : Content = {
    id: 0,
    title: '',
    description: '',
    creator: ''
  }

  constructor(){
    this.myhero.addFunction(this.hero1);
  }

  displayMyIndex(index : number): string {
    return this.myhero.printIndex(index);
}
}
