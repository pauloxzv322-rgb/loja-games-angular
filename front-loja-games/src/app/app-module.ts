import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';
import { FormProduto } from './components/form-produto/form-produto';

@NgModule({
  declarations: [
    App,
    ListaProdutos,
    FormProduto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
