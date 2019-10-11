import { Component, OnInit, Host } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.less']
})
export class Step2Component implements OnInit {
  public parentForm;

  constructor(private parentFormControl: ControlContainer) { 
  }

  ngOnInit() {
    this.parentForm = this.parentFormControl.control;
    console.log('step 2', this.parentForm);
  }

}
