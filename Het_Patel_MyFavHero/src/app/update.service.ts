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
    }
  }

  activateUpdate() {
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }
}
