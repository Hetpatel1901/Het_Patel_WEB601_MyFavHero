import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  
  content: Content[];
  
  constructor() {
  this.content = [{
    id:0,
    title: 'Ironman',
    description: 'Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the first film in the Marvel Cinematic Universe (MCU).',
    creator: 'Stan lee',
    //type: 'Super hero',
    imgURL: 'https://playcontestofchampions.com/wp-content/uploads/2021/11/champion-iron-man-infinity-war.jpg',
    tags: ['Action', 'Adventure', 'Comedy']
  },
  {
    id:1,
    title: 'Captain America',
    description:'Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics.',
    creator: 'Joe Simon ',
    type: 'Super hero',
    imgURL: 'https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg',
    tags: ['Action', 'Adventure']
  },
  {
    id:2,
    title: 'Thor',
    description:'Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the fourth film in the Marvel Cinematic Universe (MCU). It was directed by Kenneth Branagh, written by the writing team of Ashley Edward Miller and Zack Stentz .',
    creator: 'Zack Stentz',
    //type: 'Super hero',
    tags: ['Action', 'Adventure', 'Comedy'],
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg',
  },
  {
    id:3,
    title: 'Hulk',
    description:'The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character, who has dissociative identity disorder (DID), is primarily represented by the alter ego Hulk.',
    creator: 'Stan lee',
    imgURL: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg',
    type: 'Super Hero',
    tags: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy']
  },
  {
    id:4,
    title: 'Dr.strange',
    description:'Doctor Stephen Strange is a fictional character appearing in American comic books published by Marvel Comics. Created by Steve Ditko, the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.',
    creator: 'Steve Ditko',
    imgURL: 'https://media.gq-magazine.co.uk/photos/620a6a32610ac8bff62bef0f/1:1/w_809,h_809,c_limit/140222_DrS_02.jpg',
    type: 'Super hero',
    tags: ['Action', 'Adventure', 'Fantasy'],
  },
  {
    id:5,
    title: 'Spider man',
    description:'Nicholas Hammond first starred as Peter Parker / Spider-Man in the 1977 made-for-television film Spider-Man and would appear as the character two other times. In 1978, the Toei Company created a theatrical spin-off of their Spider-Man television series, with Shinji Todō reprising his role as Takuya Yamashiro / Spider-Man.',
    creator: 'Stan lee',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
  },
]
}
    ngOnInit(): void {
  }
}