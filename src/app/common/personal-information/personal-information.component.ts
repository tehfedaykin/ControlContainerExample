import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.less']
})
export class PersonalInformationComponent implements OnInit {
  public addressFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.addressFormGroup = this.controlContainer.control.get('address');
  }

}
