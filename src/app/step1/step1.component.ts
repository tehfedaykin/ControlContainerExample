import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.less']
})
export class Step1Component implements OnInit {
  public parentForm;
  constructor(private parentControl: ControlContainer) { 
  }

  ngOnInit() {
    this.parentForm = this.parentControl.control;
    console.log('step 1', this.parentControl);
  }
}
