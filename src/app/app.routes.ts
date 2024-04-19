import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/login/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/login/forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
];
