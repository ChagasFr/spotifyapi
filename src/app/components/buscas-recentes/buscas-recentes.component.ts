import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscas-recentes',
  templateUrl: './buscas-recentes.component.html',
  styleUrls: ['./buscas-recentes.component.scss'],
})
export class BuscasRecentesComponent implements OnInit {
  pesquisasRecentes = [
    'Top Brasil',
    'Top Global',
    'Classicas maquiavelicas',
    'Hip-Hop Hits',
    'Funk Hits',
  ];

  campoPesquisa = '';

  constructor() {}

  ngOnInit(): void {}

  definirPesquisa(pesquisa: string) {
    this.campoPesquisa = pesquisa;
  }

  buscar() {
    console.log('Buscando...', this.campoPesquisa);
  }
}
