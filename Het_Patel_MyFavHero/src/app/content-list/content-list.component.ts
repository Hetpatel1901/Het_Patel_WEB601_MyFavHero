import { Component, OnInit, Optional } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { content } from '../helper-files/contentDb';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  
  content: any[];
  contentId: number;
  errorMessage: string;

 // public content: Content[];
  public inputvalue?: Optional;
  item: any;

  constructor(private heroService: HeroService,
    private messageService: MessageService) {
this.inputvalue ="";
}
    ngOnInit(): void {
      this.heroService.getContentArray().subscribe(data => {
       // this.contentId && !isNaN(this.contentId) && this.contentId <= content.length
        this.content = data;
        
      });

      const id = 6; // Replace with the actual id
      this.heroService.getItemById(id).subscribe(data => {
      this.content = [data, ...this.content];
      this.addMessage(`Added content item with id ${id}`);
    });
  }

  addMessage(message: string): void {
    this.messageService.add(message);
  }

  getContent(): void {
    if (this.contentId && !isNaN(this.contentId)) {
      this.heroService.getItemById(this.contentId).subscribe(
        (content) => {
          this.content = content;
          this.errorMessage = 'null';
          this.messageService.add(`Content Item at id: ${this.contentId}`);
        },
        (error) => {
          this.errorMessage = `Error occurred while retrieving content: ${error.message}`;
          this.content = [];
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid content ID';
      this.content = [];
    }
  }
  // clickEvent(): any {
  
  //   for(let i = 0;  i < this.content.length; i++) {
  //    console.log(this.content[i].type);
  //    let abj =  <HTMLInputElement>document.getElementById('aut');   
  //    console.log(abj.value);
  //    if(this.content[i].type === abj.value){
  //      let out= <HTMLInputElement>document.getElementById('msg');
  //       out.innerHTML = 'we found the item with other';
  //     }
  //   }
  // }
}