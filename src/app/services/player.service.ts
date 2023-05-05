import { IMusica } from './../Interfaces/IMusica';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newMusica } from '../Common/factories';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  musicaAtual = new BehaviorSubject<IMusica>(newMusica());
  timerId: any = null;

  constructor(private spotifyService: SpotifyService) {
    this.obterMusicaAtual();
  }

  async obterMusicaAtual() {
    clearTimeout(this.timerId);

    // Obtendo a Musica
    const musica = await this.spotifyService.obterMusicaAtual();
    this.definirMusicaAtual(musica);

    // Causando o loop
    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual();
    }, 3000);
  }

  definirMusicaAtual(musica: IMusica) {
    this.musicaAtual.next(musica);
  }

  voltarMusica() {}

  proximaMusica() {}
}
