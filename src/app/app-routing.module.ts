import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container/container.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { RootcheckingpageComponent } from './rootcheckingpage/rootcheckingpage.component';

const routes: Routes = [
  {
    path : "",
    component : ContainerComponent,
    children : [
      {
        path: '', 
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'auth', 
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path : "rootcheck",
    component : RootcheckingpageComponent
  },

  {
    path : "**",
    component : PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
