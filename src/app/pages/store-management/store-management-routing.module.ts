import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreManagementComponent } from './store-management.component';
import { StoreCreationComponent } from './store-creation/store-creation.component';
import { StoresListComponent } from './stores-list/stores-list.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { SuperadminGuard } from '../shared/guards/superadmin.guard';
import { StoreGuard } from '../shared/guards/store.guard';
import { StoreLandingPageComponent } from './store-landing-page/store-landing-page.component';

const routes: Routes = [
  {
    path: '', component: StoreManagementComponent, children: [
      {
        path: '',
        redirectTo: 'store-details',
        pathMatch: 'full',
      },
      {
        path: 'store-details',
        component: StoreDetailsComponent,
        canActivate: [StoreGuard]
      },
      {
        path: 'create-store',
        component: StoreCreationComponent,
        canActivate: [SuperadminGuard]
      },
      {
        path: 'stores-list',
        component: StoresListComponent,
        canActivate: [SuperadminGuard]
      },
      // {
      //   path: 'store-marketing',
      //   component: StoreMarketingComponent,
      //   canActivate: [StoreGuard]
      // },
      // {
      //   path: 'store-home',
      //   component: StoreHomeComponent,
      //   canActivate: [StoreGuard]
      // },
      {
        path: 'store-landing',
        component: StoreLandingPageComponent,
        canActivate: [StoreGuard]
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreManagementRoutingModule {
}