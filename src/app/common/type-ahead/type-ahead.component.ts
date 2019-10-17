import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { tap, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-typeahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeAheadComponent),
      multi: true
    }
  ]
})
export class TypeAheadComponent implements ControlValueAccessor {
  @Input() data;
  public selected;
  public value;
  constructor() { }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = value;
    this.selectDropdown(value);
  }

  selectDropdown(val) {
    //display current value in typeahead
    if (val != undefined && val != '') {
      if (this.value && this.data) {
        this.selected = this.data.filter(x => x.id == val)[0] ? this.data.filter((x) => {
          return x.id == val
        })[0].name : '';
      }
      else {
        this.selected = val;
      }
    }
    else {
      this.selected = null;
    }
  }

  onSelect(ev) {
    //let the formControl know the value's been changed
    this.onChange(ev.item.id);
    this.onTouched();
  }

  onBlur() {
    //let the formControl know it's been touched
    this.onTouched();
  }

}
