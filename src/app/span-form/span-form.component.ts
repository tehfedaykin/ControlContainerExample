import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-span-form',
  templateUrl: './span-form.component.html',
  styleUrls: ['./span-form.component.less']
})
export class SpanFormComponent implements OnInit {
  public mainForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const control = new FormControl('inital value', {validators: Validators.required})
    this.mainForm = this.fb.group({
      user_name: ['', Validators.required],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',Validators.required],
      address: this.fb.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
        zip: ['',Validators.required]
      }),
      favorite_color: ['',Validators.required],
      favorite_food: ['',Validators.required],
      favorite_queen: ['80',Validators.required],
      favorite_season: ['',Validators.required],
      favorite_episode: [''],
      favorite_lipsyncs: this.fb.array([
        this.fb.group({
          lipsync: [''],
          ranking: ['']
        })
      ])
    })

    this.mainForm.get('favorite_season').valueChanges.subscribe((val) => {
      const favEpControl = this.mainForm.get('favorite_episode');
      if(val) {
        favEpControl.setValidators(Validators.required);
        favEpControl.setValue('59');
      }
      else {
        favEpControl.setValidators(null)
      }
      favEpControl.updateValueAndValidity();
    })
  }

  save() {
    Object.keys(this.mainForm.controls).forEach((field) => {
      const control = this.mainForm.get(field);
      control.markAsTouched();
    })
  }

}
