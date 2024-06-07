import { POKEAPIService } from '../services/pokeapi.service';
import { ViaCepService } from '../services/via-cep.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
areaBuscarPokemon: string = '50610400';
areaBusca: any = {
bairro: '',
localidade: '',
logradouro: '',
uf: ''
};

constructor(
  private pokeAPIService: POKEAPIService,
  private viaCEPService: ViaCepService

) {}
buscarPokemon() {
this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
.subscribe((value) => {
this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value)) ["bairro"];
this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value)) ['localidade'];
this.areaBusca.uf = ' - ' + JSON.parse(JSON.stringify(value)) ['uf'];
});
this.pokeAPIService.getPokeAPIService();
}

}


