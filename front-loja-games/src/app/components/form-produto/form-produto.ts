import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-form-produto',
  standalone: false,
  templateUrl: './form-produto.html',
  styleUrl: './form-produto.css'
})
export class FormProduto implements OnInit {
  produto: Produto = {
    nome: '',
    descricao: '',
    preco: 0,
    estoque: 0
  };

  idProduto: string | null = null;
  mensagemErro: string = '';

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.idProduto = this.route.snapshot.paramMap.get('id');

    if (this.idProduto) {
      this.produtoService.buscarPorId(this.idProduto).subscribe({
        next: (dados) => {
          this.produto = dados;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao buscar produto:', erro);
          this.mensagemErro = 'Não foi possível carregar os dados deste produto.';
          this.cdr.detectChanges();
        }
      });
    }
  }

  salvar(): void {
    if (this.idProduto) {
      this.produtoService.atualizar(this.idProduto, this.produto).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/produtos']);
        },
        error: (erro) => {
          console.error('Erro ao atualizar:', erro);
          this.mensagemErro = 'Erro ao atualizar o produto no servidor.';
          this.cdr.detectChanges();
        }
      });
    } else {
      this.produtoService.cadastrar(this.produto).subscribe({
        next: () => {
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['/produtos']);
        },
        error: (erro) => {
          console.error('Erro ao cadastrar:', erro);
          this.mensagemErro = 'Erro ao cadastrar o produto no servidor.';
          this.cdr.detectChanges();
        }
      });
    }
  }
}
