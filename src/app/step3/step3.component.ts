import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormControl } from '@angular/forms';
import { SeasonService, Iqueen } from '../common/season.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.less']
})
export class Step3Component implements OnInit {
  public parentForm;
  public queens$: Observable<Iqueen[]>;
  public lipsyncs$: Observable<any[]>;
  public lipSyncFormArray;

  constructor(
    private parentFormControl: ControlContainer,
    private seasonService: SeasonService
  ) { 
  }

  ngOnInit() {
    this.parentForm = this.parentFormControl.control;
    this.lipSyncFormArray = this.parentForm.get('favorite_lipsyncs');
    console.log('queens', this.lipSyncFormArray);
    this.queens$ = this.seasonService.getQueens();

    this.lipsyncs$ = this.seasonService.getLipsyncs();
  }

  removeLipsync(i) {
    this.lipSyncFormArray.removeAt(i)
  }

  addLipsync() {
    let length = this.lipSyncFormArray.controls.length;
    console.log('len', length);
    this.lipSyncFormArray.insert(length, new FormGroup({
      lipsync: new FormControl(''),
      ranking: new FormControl('0')
    }))
  }

}
