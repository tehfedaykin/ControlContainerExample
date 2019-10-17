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
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrettyPrintPipe } from './prettyprint.pipe';
import { TypeAheadComponent } from './common/type-ahead/type-ahead.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AddqueenComponent } from './addqueen/addqueen.component';

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
    PrettyPrintPipe,
    TypeAheadComponent,
    AddqueenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
