import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import * as firebase from 'firebase/app';
import { AnalyticsService } from './analytics/analytics.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthService } from './auth/auth.service';
import { AuthService } from './services/auth.service';
// import { AuthGuard } from 'app/services/auth-guard.service';
import { environment } from '../environments/environment';
import { WorksheetGeneratorComponent } from './worksheet-generator/worksheet-generator.component';
import { WorksheetService } from './worksheet/worksheet.service';
import { MaterialComponentModule } from './material/material-component.module';
import { SafePipe } from './safe.pipe';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    WorksheetGeneratorComponent,
    SafePipe,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutes, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AnalyticsService,
    AuthService,
    AuthGuard,
    WorksheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
