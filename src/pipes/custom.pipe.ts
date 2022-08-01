import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'addprefixed' })
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: string | null): string {
    return '$ ' + value;
  }
}
