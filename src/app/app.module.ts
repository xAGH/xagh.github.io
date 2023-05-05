// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { InputComponent } from './components/input/input.component';
import { AlwaysOnFocusDirective } from './core/directives/always-on-focus/always-on-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    InputComponent,
    AlwaysOnFocusDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
