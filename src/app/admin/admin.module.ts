import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageGalerieComponent } from './manage-galerie/manage-galerie.component';
import { ManageCarouselComponent } from './manage-carousel/manage-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminDashboardComponent, AdminComponent, ManageGalerieComponent, ManageCarouselComponent]
})
export class AdminModule { }
