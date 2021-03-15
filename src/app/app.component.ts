import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.cidadeService.consultar();
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome })
      .then(cidade => {
        alert(`Cidade "$(cidade.nome}" adicionada com codigo ${cidade.id}!`);
        this.consultar();
      })
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() => {
        alert('Cidade Excluída com Sucesso!');
        this.consultar();
      });
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }

}


