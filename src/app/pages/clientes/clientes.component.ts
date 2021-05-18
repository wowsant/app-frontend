import { Component, OnInit } from '@angular/core';

declare interface ListaDadosClientes {
    id: string,
    situacao: string,
    nomeContratante: string,
    cpf: string
}

@Component({
    selector: 'clientes-component',
    moduleId: module.id,
    templateUrl: 'clientes.component.html'
})

export class ClientesComponent implements OnInit {
    public listaClientes: ListaDadosClientes[];
    public listaTituloClientes: Object;
    
    ngOnInit(){

        this.listaTituloClientes = [
            'id',
            'Situação',
            'Nome',
            'CPF',
            'Ações'
        ];

        console.log(this.listaTituloClientes)

        
        
        this.listaClientes = [
            {
                id: '1',
                situacao: 'Ativo',
                nomeContratante: 'Moisés Abraão Isaque Jacó',
                cpf: '18475647338'
            },
            {
                id: '2',
                situacao: 'Ativo',
                nomeContratante: 'Guilherme Antonio da Cunha',
                cpf: '098762534252'
            },            
            {
                id: '3',
                situacao: 'Ativo',
                nomeContratante: 'Elza Vitória Cláudia Fernandes',
                cpf: '31232131233'
            },
            {
                id: '4',
                situacao: 'Ativo',
                nomeContratante: 'Rosângela Melissa Tatiane Cardoso',
                cpf: '31232131233'

            },
            {
                id: '5',
                situacao: 'Ativo',
                nomeContratante: 'Vitor Sérgio das Neves',
                cpf: '31232131233'
            },
            {
                id: '6',
                situacao: 'Ativo',
                nomeContratante: 'Fabiana Raimunda Sophia Mendes',
				cpf: '233345343213'
            },
            {
                id: '7',
                situacao: 'Ativo',
                nomeContratante: 'Cecília Beatriz Sophia da Mata',
				cpf: '233345343213'
            },
        ];
       
    }
    setDadosClientes = function(obj:ListaDadosClientes) {
        console.log(obj);
         
    };
}
