import { BannerComponent } from './../../components/banner/banner.component';
import { PainelDireitoComponent } from './../../components/painel-direito/painel-direito.component';
import { TopArtistaComponent } from './../../components/top-artista/top-artista.component';
import { PainelEsquerdoComponent } from './../../components/painel-esquerdo/painel-esquerdo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { BotaoMenuComponent } from 'src/app/components/botao-menu/botao-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeUsuarioComponent } from 'src/app/components/rodape-usuario/rodape-usuario.component';
import { HomeComponent } from '../home/home.component';
import { BuscasRecentesComponent } from 'src/app/components/buscas-recentes/buscas-recentes.component';
import { FormsModule } from '@angular/forms';
import { TopArtistasComponent } from 'src/app/components/top-artistas/top-artistas.component';
import { ArtistaItemImagemComponent } from 'src/app/components/artista-item-imagem/artista-item-imagem.component';
import { PlayerCardComponent } from 'src/app/components/player-card/player-card.component';
import { ListaMusicaComponent } from '../lista-musica/lista-musica.component';

@NgModule({
  declarations: [
    PlayerComponent,
    ListaMusicaComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    RodapeUsuarioComponent,
    HomeComponent,
    TopArtistaComponent,
    PainelDireitoComponent,
    BuscasRecentesComponent,
    TopArtistasComponent,
    ArtistaItemImagemComponent,
    PlayerCardComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forChild(PlayerRotas),
  ],
})
export class PlayerModule {}
