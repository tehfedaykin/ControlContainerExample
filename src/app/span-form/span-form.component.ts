import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-span-form',
  templateUrl: './span-form.component.html',
  styleUrls: ['./span-form.component.less']
})
export class SpanFormComponent implements OnInit {
  public mainForm: FormGroup;
  public sampleForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
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
      favorite_season: ['',Validators.required],
      favorite_episode: ['',Validators.required]
    })

    this.mainForm.valueChanges.subscribe((val) => {
      console.log('form changed', val);
    })
  }

}
