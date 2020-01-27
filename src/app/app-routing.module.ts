import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'linegraph', loadChildren: './linegraph/linegraph.module#LinegraphPageModule' },
  { path: 'templates', loadChildren: './templates/templates.module#TemplatesPageModule' },
  { path: 'resources', loadChildren: './resources/resources.module#ResourcesPageModule' },
  { path: 'graphcompare', loadChildren: './graphcompare/graphcompare.module#GraphcomparePageModule' },
  { path: 'comparative', loadChildren: './comparative/comparative.module#ComparativePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
