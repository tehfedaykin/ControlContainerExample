import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.less']
})
export class Step3Component implements OnInit {
  public parentForm;
  constructor(private parentFormControl: ControlContainer) { 
  }

  ngOnInit() {
    this.parentForm = this.parentFormControl.control;
  }

}
