import { SpotifyService } from './../../services/spotify.service';
import { IUsuario } from './../../Interfaces/IUsuario';
import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rodape-usuario',
  templateUrl: './rodape-usuario.component.html',
  styleUrls: ['./rodape-usuario.component.scss'],
})
export class RodapeUsuarioComponent {
  sairIcone = faSignOutAlt;
  usuario: IUsuario = null;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.usuario = this.spotifyService.usuario;
  }

  logout() {
    this.spotifyService.logout();
  }
}
