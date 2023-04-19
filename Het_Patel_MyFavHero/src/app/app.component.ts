import { Component } from '@angular/core';
import { UpdateService } from './update.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Het_Patel_MyFavHero';
  constructor(private updateService: UpdateService, private snackBar: MatSnackBar) {
    this.updateService.swUpdate.available.subscribe(() => {
      const snackBarRef = this.snackBar.open('Update available', 'Update', { duration: 5000 });
  
      snackBarRef.onAction().subscribe(() => {
        this.updateService.activateUpdate();
      });
    });
  }
}

