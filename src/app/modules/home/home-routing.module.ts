import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`@modules/tracks/tracks.module`).then(t => t.TracksModule),
  },
  {
    path: 'home',
    loadChildren: () => import(`@modules/tracks/tracks.module`).then(t => t.TracksModule),
  },
  {
    path: 'tracks',
    loadChildren: () => import(`@modules/tracks/tracks.module`).then(t => t.TracksModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import(`@modules/favorites/favorites.module`).then(t => t.FavoritesModule),
  },
  {
    path: 'history',
    loadChildren: () => import(`@modules/history/history.module`).then(t => t.HistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
