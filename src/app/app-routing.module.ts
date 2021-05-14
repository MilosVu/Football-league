import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'standings',
    pathMatch: 'full'
  },
  {
    path: 'players',
    loadChildren: () => import('./players/players.module').then( m => m.PlayersPageModule)
  },
  {
    path: 'standings',
    loadChildren: () => import('./standings/standings.module').then( m => m.StandingsPageModule)
  },
  {
    path: 'fixtures',
    loadChildren: () => import('./fixtures/fixtures.module').then( m => m.FixturesPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
