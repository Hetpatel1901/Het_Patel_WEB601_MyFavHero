import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-detail',
  template: `
    <mat-card *ngIf="content">
      <mat-card-header>
        <mat-card-title>{{ content.title }}</mat-card-title>
        <mat-card-subtitle>Author: {{ content.author }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="{{ content.imageUrl }}" alt="{{ content.title }}">
      <mat-card-content>
        <p>{{ content.description }}</p>
      </mat-card-content>
      <mat-card-actions>
        <a mat-button routerLink="/list">Back to List</a>
      </mat-card-actions>
    </mat-card>
  `
})
export class ContentDetailComponent implements OnInit {
  content: Content;
  contentService: any;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contentService.getContent(id).subscribe((content: { id: any; title: any; }) => {
      if (content) {
        this.messageService.add(`Content with id=${content.id} and title=${content.title} was retrieved.`);
      }
    });
  }
}
