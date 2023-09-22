import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
  {
    path: 'editarpelicula/:id',
    loadChildren: () => import('./editarpelicula/editarpelicula.module').then( m => m.EditarpeliculaPageModule)
  },
  {
    path: 'nuevapelicula',
    loadChildren: () => import('./nuevapelicula/nuevapelicula.module').then( m => m.NuevapeliculaPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
