import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path:'register',
   loadChildren:()=>import('./auth/auth.route').then(m =>m.registerRoute)
  }
];
