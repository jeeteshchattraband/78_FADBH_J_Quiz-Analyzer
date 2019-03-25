import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksheetGeneratorComponent } from './worksheet-generator/worksheet-generator.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'worksheet-generator',
    component: WorksheetGeneratorComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'worksheet-generator/:id',
    component: WorksheetGeneratorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent,
    // redirectTo: '/worksheet-generator',
    // pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
