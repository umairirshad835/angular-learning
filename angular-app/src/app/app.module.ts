import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { successcomponent } from './success-message/success.component';
import { ErrorMessageComponent } from './error-message/error.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    successcomponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot([
      // { path: '', component: RegisterComponent },
      { path: 'reactive-form', component: RegisterComponent }
    ]),

  ],
  providers: [],
  bootstrap: [successcomponent]
})
export class AppModule { }
