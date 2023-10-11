import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CaretShapes } from 'src/app/core/constants/caret-shapes.const';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit, OnDestroy{

  // Input field with reactive forms
  inputTextField: FormControl;

  // Reference to the inputTextField length
  private _caretGapLength: number;

  // Suscription reference to inputTextField changes
  private _onChangeSuscription$!: Subscription;

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

  before: number = 0;

  constructor() {
    // Default values
    this._caret = CaretShapes.BAR;
    this.inputTextField = new FormControl('');
    this._caretGapLength = this.inputTextField.value.length;
  }

  ngAfterViewInit(): void {
    this._onChangeSuscription$ = this.inputTextField.valueChanges.subscribe(
      {
        next: (value: string) => {
          console.log("Value,", value.length);
          console.log("Shape,", this.len());
          console.log("Before", this.before);

            this.setCaretGap(value.length)
          }

      }
      )
    }

  private setCaretGap(value: number, add: boolean = false): void {
    if (add){
      this.caretDivRef.nativeElement.style.setProperty('--input-length', `${this.len() + value}ch`)
    }
    else {
      this.caretDivRef.nativeElement.style.setProperty('--input-length', `${value}ch`)

    }
  }

  private len(): number {
    return parseInt(this.caretDivRef.nativeElement.style.getPropertyValue('--input-length').replace('ch', ''));;
  }

  logg(e: string) {
    const len = this.len();
    if (e == 'left') {
      if(len > 0) {
        this.setCaretGap(-1, true)
      }
    }
    else {
      if(len < this.inputTextField.value.length) {
        this.setCaretGap(1, true)
      }
    }
  }

  ngOnDestroy(): void {
    this._onChangeSuscription$.unsubscribe();
  }

  // Returns the class to be added to the input to customize the caret shape.
  get caretShapeClass(): string {
    return `caret-${this.caretShape}`;
  }

}
