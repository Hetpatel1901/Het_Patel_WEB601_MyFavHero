import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModifyContentComponent } from '../modify-content/modify-content.component';


@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {
    dialogTitle = 'Add HeroType';

    constructor(
      public dialogRef: MatDialogRef<ModifyContentComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    onCancelClick(): void {
      this.dialogRef.close();
    }
    
    onAddClick(): void {
      this.dialogRef.close(this.data);
    }  
}
