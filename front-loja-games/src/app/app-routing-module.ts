import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';
import { FormProduto } from './components/form-produto/form-produto';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ListaProdutos },
  { path: 'produtos/novo', component: FormProduto },
  { path: 'produtos/editar/:id', component: FormProduto }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
