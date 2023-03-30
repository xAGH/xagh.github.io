import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { DatetimeFormats } from 'src/app/core/constants/datetime-formats.const';

@Component({
  selector: 'app-timer',
  template: '<span class="select-none">{{ timer | async | date:format}}</span>',
})
export class TimerComponent {

  @Input() format: DatetimeFormats;
  timer: Observable<number>;

  constructor() {
    // Default values
    this.format = DatetimeFormats.MEDIUM_TIME;

    // Setting timer
    const NOW = Date.now();
    this.timer = timer(0, 1000).pipe(
      map((time: number) => this.calcNewTimestamp(NOW, time))
    );
  }

  // Gte the new timestamp from the current timestamp and the elapsed secods.
  calcNewTimestamp(initialTime: number, elapsedSeconds: number): number {
    return initialTime + elapsedSeconds * 1000;
  }
}
