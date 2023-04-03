import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CaretShapes } from 'src/app/core/constants/caret-shapes.const';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterViewInit, OnDestroy{

  // Input field with reactive forms
  inputTextField: FormControl;

  // Reference to the inputTextField length
  caretGapLength: number;

  // Suscription reference to inputTextField changes
  private onChangeSuscription$!: Subscription;

  // Element reference to div element that works as care
  @ViewChild('caret') caretDivRef!: ElementRef<HTMLDivElement>

  /**
   * Variable to determine the caret shape.
   * It's decorated with Input and have getter and setter for reactive compatibility.
  */
  private _caret: CaretShapes;

  @Input() set caretShape(value: CaretShapes) {
    this.caretShape = value;
  };

  get caretShape(): CaretShapes {
    return this._caret;
  };

  constructor() {
    // Default values
    this._caret = CaretShapes.BAR;
    this.inputTextField = new FormControl('');
    this.caretGapLength = this.inputTextField.value.length;
  }

  ngAfterViewInit(): void {
    this.onChangeSuscription$ = this.inputTextField.valueChanges.subscribe(
      {
        next: (value: string) => {
          this.caretDivRef.nativeElement.style.setProperty('--input-length', `${value.length}ch`)
        },
      }
    )
  }

  ngOnDestroy(): void {
    this.onChangeSuscription$.unsubscribe();
  }

  // Returns the class to be added to the input to customize the caret shape.
  get caretShapeClass(): string {
    return `caret-${this.caretShape}`;
  }

}
