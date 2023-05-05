import { HomeComponent } from './../home/home.component';
import { Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { ListaMusicaComponent } from '../lista-musica/lista-musica.component';

export const PlayerRotas: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'lista/:tipo/:id',
        component: ListaMusicaComponent,
      },
    ],
  },
];
