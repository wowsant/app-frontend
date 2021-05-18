import { Component, OnInit } from '@angular/core';

declare interface ListaDadosContratos {
    id: string,
    situacao: string,
    quitado: string,
    nomeContratante: string,
    tipoContrato: string,
    valor: string,
    inicioCobranca: string,
    fimCobranca: string
}


@Component({
    selector: 'contratos-component',
    moduleId: module.id,
    templateUrl: 'contratos.component.html'
})

export class ContratosComponent implements OnInit {
    public listaContratos: ListaDadosContratos[];
    public listaTituloContratos: Object;
    
    ngOnInit(){

        this.listaTituloContratos = [
            'N°',
            'Situacao',
            'Quitado',
            'Nome contratante',
            'Tipo contrato',
            'Valor',
            'Inicio cobrança',
            'Fim cobrança',
            'Ações'
        ];

        console.log(this.listaTituloContratos)

        
        this.listaContratos = [
            {
                id: '1',
                situacao: 'Ativo',
                quitado: 'Sim',
                nomeContratante: 'Moisés Abraão Isaque Jacó',
                tipoContrato: 'Trabalhista',
                valor: '33.000,95',
                inicioCobranca: '09/05/2021',
                fimCobranca: '10/12/2021'
            },
            {
                id: '2',
                situacao: 'Ativo',
                quitado: 'Não',
                nomeContratante: 'Guilherme Antonio da Cunha',
                tipoContrato: 'Civil',
                valor: '990,00',
                inicioCobranca: '10/04/2021',
                fimCobranca: '10/08/2021'
            },            
            {
                id: '3',
                situacao: 'Ativo',
                quitado: 'Não',
                nomeContratante: 'Elza Vitória Cláudia Fernandes',
                tipoContrato: 'Trabalhista',
                valor: '0,00',
                inicioCobranca: '09/05/2021',
                fimCobranca: '10/12/2021'
            },
            {
                id: '4',
                situacao: 'Ativo',
                quitado: 'Não',
                nomeContratante: 'Rosângela Melissa Tatiane Cardoso',
                tipoContrato: 'Trabalhista',
                valor: '9.000,00',
                inicioCobranca: '09/05/2021',
                fimCobranca: '10/12/2021'
            },
            {
                id: '5',
                situacao: 'Ativo',
                quitado: 'Sim',
                nomeContratante: 'Vitor Sérgio das Neves',
                tipoContrato: 'Trabalhista',
                valor: '459,99',
                inicioCobranca: '09/05/2021',
                fimCobranca: '10/12/2021'
            },
            {
                id: '6',
                situacao: 'Ativo',
                quitado: 'Não',
                nomeContratante: 'Fabiana Raimunda Sophia Mendes',
                tipoContrato: 'Trabalhista',
                valor: '100,95',
                inicioCobranca: '09/05/2021',
                fimCobranca: '10/12/2021'
            },
            {
                id: '7',
                situacao: 'Ativo',
                quitado: 'Sim',
                nomeContratante: 'Cecília Beatriz Sophia da Mata',
                tipoContrato: 'Trabalhista',
                valor: '3.480,00',
                inicioCobranca: '10/05/2021',
                fimCobranca: '29/12/2021'
            },
            {
                id: '8',
                situacao: 'Ativo',
                quitado: 'Sim',
                nomeContratante: 'Luiz Thomas Carlos Cavalcanti',
                tipoContrato: 'Trabalhista',
                valor: '990,00',
                inicioCobranca: '10/05/2021',
                fimCobranca: '29/12/2021'
            },
            {
                id: '9',
                situacao: 'Ativo',
                quitado: 'Sim',
                nomeContratante: 'Cláudio Gabriel Almada',
                tipoContrato: 'Civil',
                valor: '3.480,00',
                inicioCobranca: '10/05/2021',
                fimCobranca: '29/12/2021'
            },
            {
                id: '10',
                situacao: 'Ativo',
                quitado: 'Sim',
                nomeContratante: 'Lucas Fernando Bento da Conceição',
                tipoContrato: 'Trabalhista',
                valor: '1.330,00',
                inicioCobranca: '10/05/2021',
                fimCobranca: '29/12/2021'
            },
            {
                id: '11',
                situacao: 'Ativo',
                quitado: 'Sim',
                nomeContratante: 'Alice Lavínia Luna Melo',
                tipoContrato: 'Civil',
                valor: '7.000,00',
                inicioCobranca: '10/05/2021',
                fimCobranca: '29/12/2021'
            },
        ];
       
    }

    setDadosContratos = function(obj:ListaDadosContratos) {
        console.log(obj);
         
    };
}
