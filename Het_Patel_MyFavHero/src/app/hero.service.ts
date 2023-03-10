import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from './helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getContentArray(): Observable<any[]> {
    this.messageService.add('Content array loaded!');
    return of(content);
  }

  getItemById(id: number): Observable<any> {
    const x = content.find(content => content.id === id);
    this.messageService.add(`Content item at id: ${id} retrieved!`);
    return of(x);
  }


}