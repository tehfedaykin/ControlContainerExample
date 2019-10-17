import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addqueen',
  templateUrl: './addqueen.component.html',
  styleUrls: ['./addqueen.component.less']
})
export class AddqueenComponent implements OnInit {
  public myQueens: FormArray;
  constructor() { }

  ngOnInit() {
    this.myQueens = new FormArray([
      new FormGroup({
        name: new FormControl(''),
        season: new FormControl('')
      })
    ])
  }

  removeGroup(i) {
    this.myQueens.removeAt(i)
  }

}
