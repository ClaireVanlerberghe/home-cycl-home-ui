import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const [hours, minutes, seconds] = value.split(':').map(Number);

    if (hours > 0) {
      if (minutes > 0) {
        return `${hours} ${hours === 1 ? 'heure' : 'heures'} ${minutes}`;
      }
      return `${hours} ${hours === 1 ? 'heure' : 'heures'}`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    } else if (seconds > 0) {
      return `${seconds} ${seconds === 1 ? 'seconde' : 'secondes'}`;
    }

    return '';
  }
}
