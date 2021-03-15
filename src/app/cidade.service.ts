import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CidadeService {
  HttpClientModule: any;

  constructor(private http: HttpClientModule) { }

  consultar() {
    this.HttpClientModule.get('http://localhost:3000/cidades')
      .toPromise()
      .then((HttpResponse: { JSON: () => any; }) => HttpResponse.JSON());

  }
}
