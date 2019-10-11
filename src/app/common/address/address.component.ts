import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.less']
})
export class AddressComponent implements OnInit {
  public addressFormGroup;
  constructor(private controlContainer: ControlContainer) { 
  }

  ngOnInit() {
    this.addressFormGroup = this.controlContainer.control.get('address');
  }

}
