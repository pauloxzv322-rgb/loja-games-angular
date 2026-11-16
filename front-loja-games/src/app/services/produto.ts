import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // Endereço da API local conforme pedido na atividade
  private readonly apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  // 1. Consulta todos os produtos (GET)
  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // 2. Consulta um produto específico pelo ID (GET)
  buscarPorId(id: number | string): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  // 3. Cadastra um novo produto (POST)
  cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  // 4. Atualiza um produto existente (PUT)
  atualizar(id: number | string, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  // 5. Exclui um produto existente (DELETE)
  excluir(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
