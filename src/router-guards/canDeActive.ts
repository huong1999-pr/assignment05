import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class canDeActivateDemo implements CanDeactivate<any> {
  canDeactivate(): boolean {
    return true;
  }
}
