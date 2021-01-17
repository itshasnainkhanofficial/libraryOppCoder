import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../../store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../store/effects/auth.effects';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthlinksComponent } from './authlinks/authlinks.component';
import { ShareModule } from 'src/app/shared/shared.module';
import {  ReactiveFormsModule  } from "@angular/forms";



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthlinksComponent],
  imports: [
    ShareModule,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
  ,
  exports:[AuthlinksComponent]
})
export class AuthModule { }
