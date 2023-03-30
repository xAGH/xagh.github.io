import { Component, Input } from '@angular/core';
import { DatetimeFormats } from 'src/app/core/constants/datetime-formats.const';

@Component({
  selector: 'app-timer',
  template: '<span class="select-none">{{ now | date:format }}</span>',
})
export class TimerComponent {

  @Input() format: DatetimeFormats;
  now: number;

  constructor() {
    // Default values
    this.now = 0;
    this.format = DatetimeFormats.FULL;

    setInterval(() => {
      this.now = new Date().getTime();
    }, 1)
  }
}
