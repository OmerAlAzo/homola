import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: '',
    redirectTo: 'role-select',
    pathMatch: 'full',
  },
  {
    path: 'role-select',
    loadComponent: () =>
      import('./onboarding/role-select/role-select.component').then((m) => m.RoleSelectComponent),
  },
  // {
  //   path: 'driver-register',
  //   loadComponent: () =>
  //     import('./pages/driver-register/driver-register.page').then((m) => m.DriverRegisterPage),
  // },
  // {
  //   path: 'customer-register',
  //   loadComponent: () =>
  //     import('./pages/customer-register/customer-register.page').then((m) => m.CustomerRegisterPage),
  // },
  // {
  //   path: 'driver-dashboard',
  //   loadComponent: () =>
  //     import('./pages/driver-dashboard/driver-dashboard.page').then((m) => m.DriverDashboardPage),
  // },
  // {
  //   path: 'customer-dashboard',
  //   loadComponent: () =>
  //     import('./pages/customer-dashboard/customer-dashboard.page').then((m) => m.CustomerDashboardPage),
  // },

];



