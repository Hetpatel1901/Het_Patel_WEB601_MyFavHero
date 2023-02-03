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
    title: 'IronMan3',
    description: 'Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man',
    creator: 'Stan Lee'
  }

  hero2 : Content = {
    id: 1,
    title: 'Thor2',
    description: 'Thor: The Dark World is a 2013 American superhero film based on the Marvel Comics character Thor, produced by Marvel Studios and distributed by Walt Disney.',
    creator: 'Christopher Yost'
  }

  hero3 : Content = {
    id: 2,
    title: 'Captain America',
    description: 'Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world mightiest heroes.',
    creator: 'jack Kirby'
  }

  constructor(){
    this.myhero.addFunction(this.hero1);
    this.myhero.addFunction(this.hero2);
    this.myhero.addFunction(this.hero3);
  }

  displayMyIndex(index : number): string {
    return this.myhero.printIndex(index);
}
}
