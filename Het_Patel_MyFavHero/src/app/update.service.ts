import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(() => {
        // Show the snackbar here
      });
  
      this.checkForUpdates();
    }
  }
  
  private checkForUpdates() {
    setInterval(() => {
      this.swUpdate.checkForUpdate().then(() => {
        console.log('Checked for updates');
      });
    }, 1800000); // 1800000 ms = 30 minutes
  }

  activateUpdate() {
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }
}
