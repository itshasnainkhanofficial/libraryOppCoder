import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { ContactusComponent } from './layout/contactus/contactus.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './layout/header/header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { FormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { CustomerSupportEffects } from './store/effects/customer-support.effects';
import { AuthModule } from './modules/auth/auth.module';
import { ShareModule } from './shared/shared.module';
import { ContainerComponent } from './container/container/container.component';
import { RootcheckingpageComponent } from './rootcheckingpage/rootcheckingpage.component';
import { SpinnerEffects } from './store/effects/spinner.effects';
import { AlertEffects } from './store/effects/alert.effects';
import { RouteEffects } from './store/effects/route.effects';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    HeaderComponent,
    ContainerComponent,
    RootcheckingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CustomerSupportEffects, SpinnerEffects, AlertEffects, RouteEffects]),
    AuthModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
