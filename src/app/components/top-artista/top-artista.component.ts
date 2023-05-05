import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { IArtista } from 'src/app/Interfaces/IArtista';
import { newArtista } from 'src/app/Common/factories';

@Component({
  selector: 'app-top-artista',
  templateUrl: './top-artista.component.html',
  styleUrls: ['./top-artista.component.scss'],
})
export class TopArtistaComponent implements OnInit {
  topArtista: IArtista = newArtista();

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.buscarArtista();
  }

  async buscarArtista() {
    const artistas = await this.spotifyService.buscarTopArtistas(1);

    if (!!artistas) this.topArtista = artistas.pop();
  }
}
