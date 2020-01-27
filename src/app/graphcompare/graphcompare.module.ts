import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GraphcomparePage } from './graphcompare.page';

const routes: Routes = [
  {
    path: '',
    component: GraphcomparePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GraphcomparePage]
})
export class GraphcomparePageModule {}
