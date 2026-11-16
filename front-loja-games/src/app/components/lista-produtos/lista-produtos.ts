import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos implements OnInit {
  produtos: Produto[] = [];
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private produtoService: ProdutoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listar().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.mensagemErro = '';
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos:', erro);
        this.mensagemErro = 'Não foi possível carregar os produtos. Verifique se o servidor Back-End está ligado.';
        this.cdr.detectChanges();
      }
    });
  }

  excluirProduto(id: number | string | undefined): void {
    if (!id) return;

    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.excluir(id).subscribe({
        next: () => {
          this.mensagemSucesso = 'Produto excluído com sucesso!';
          this.mensagemErro = '';
          this.carregarProdutos();
        },
        error: (erro) => {
          console.error('Erro ao excluir produto:', erro);
          this.mensagemErro = 'Erro ao tentar excluir o produto.';
          this.mensagemSucesso = '';
          this.cdr.detectChanges();
        }
      });
    }
  }
}
