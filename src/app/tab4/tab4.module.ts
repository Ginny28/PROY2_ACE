import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';
import {TabViewModule} from 'primeng/tabview';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    TabViewModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
