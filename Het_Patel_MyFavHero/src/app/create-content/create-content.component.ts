import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() contentCreated = new EventEmitter<Content>();
  newContent: Content = { id: 0, title: '', description: '', creator: '' };
  errorMessage: string;

  onSubmit() {
    if (!this.newContent.id || !this.newContent.title || !this.newContent.description || !this.newContent.creator) {
      this.errorMessage = 'Please fill in all required fields.';
      return Promise.reject();
    }
    this.contentCreated.emit(this.newContent);
    this.newContent = { id: 0, title: '', description: '', creator: '' };
    this.errorMessage = '';
    return Promise.resolve();
  }
}