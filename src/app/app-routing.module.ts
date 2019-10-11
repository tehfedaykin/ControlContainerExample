import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpanFormComponent } from './span-form/span-form.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SpanFormComponent,
    children: [
      {
        path: 'step-1',
        component: Step1Component
      },
      {
        path: 'step-2',
        component: Step2Component
      },
      {
        path: 'step-3',
        component: Step3Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
