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

  /**
   * Variable to determine the caret shape.
   * It's decorated with Input for reactive compatibility.
  */
  private _caret: CaretShapes;

  inputTextField: FormControl;
  private onChangeSuscription$!: Subscription;

  @ViewChild('caret') caretDivRef!: ElementRef<HTMLDivElement>

  @Input() set caretShape(value: CaretShapes) {
    this.caretShape = value;
  };

  get caretShape(): CaretShapes {
    return this._caret;
  };

  constructor() {
    // Default values
    this._caret = CaretShapes.BLOCK;
    this.inputTextField = new FormControl('');
  }

  ngAfterViewInit(): void {
    this.onChangeSuscription$ = this.inputTextField.valueChanges.subscribe(
      {
        next: (value: string) => {
          this.caretDivRef.nativeElement.style.setProperty('--input-length', `${(value.length)}ch`)
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
