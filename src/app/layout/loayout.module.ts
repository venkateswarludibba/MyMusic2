import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoayoutRoutingModule } from './loayout-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LoayoutRoutingModule
  ]
})
export class LoayoutModule { }
