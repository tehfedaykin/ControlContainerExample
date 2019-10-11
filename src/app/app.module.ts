import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpanFormComponent } from './span-form/span-form.component';
import { AddressComponent } from './common/address/address.component';
import { DependentComponent } from './common/dependent/dependent.component';
import { PersonalInformationComponent } from './common/personal-information/personal-information.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PrettyPrintPipe } from './prettyprint.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpanFormComponent,
    AddressComponent,
    DependentComponent,
    PersonalInformationComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    PrettyPrintPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
