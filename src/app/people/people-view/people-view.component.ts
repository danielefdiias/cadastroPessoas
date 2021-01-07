import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicDetailActions,
  PoPageDynamicDetailField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.css'],
})
export class PeopleViewComponent implements OnInit {
  title = 'Visualizando';

  readonly actions: PoPageDynamicDetailActions = {
    back: '/',
    edit: 'people/edit/:id',
    remove: '/',
  };

  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', gridColumns: 2, key: true, divider: 'Dados Pessoais' },
    { property: 'name', label: 'Nome', gridXlColumns: 3, gridLgColumns: 3 },
    {
      property: 'genre',
      tag: true,
      label: 'Gênero',
      gridColumns: 2,
      gridSmColumns: 6,
    },
    {
      property: 'birthdate',
      type: 'date',
      label: 'Data de Nascimento',
      gridXlColumns: 4,
      gridLgColumns: 4,
    },
    {
      property: 'nationality',
      label: 'Nacionalidade',
      gridXlColumns: 2,
      gridLgColumns: 2,
    },
    {
      property: 'birthPlace',
      label: 'Local de Nascimento',
      gridXlColumns: 3,
      gridLgColumns: 3,
    },
    {
      property: 'mother',
      label: 'Nome da Mãe',
      gridXlColumns: 2,
      gridLgColumns: 2,
    },
    {
      property: 'father',
      label: 'Nome do Pai',
      gridXlColumns: 3,
      gridLgColumns: 3,
    },
    {
      property: 'email',
      divider: 'Dados de Contato',
      label: 'E-mail',
      gridXlColumns: 4,
      gridLgColumns: 4,
    },
    {
      property: 'telefone',
      label: 'Telefone',
      gridXlColumns: 2,
      gridLgColumns: 2,
    },
    {
      property: 'github',
      label: 'Github',
      gridXlColumns: 5,
      gridLgColumns: 5,
    },
    {
      property: 'instagram',
      label: 'Instagram',
      gridXlColumns: 4,
      gridLgColumns: 4,
    },
    {
      property: 'twitter',
      label: 'Twitter',
      gridXlColumns: 3,
      gridLgColumns: 3,
    },
    {
      property: 'country',
      divider: 'Endereço',
      label: 'País',
      gridXlColumns: 2,
      gridLgColumns: 2,
    },
    { property: 'state', label: 'Estado', gridXlColumns: 3, gridLgColumns: 3 },
    {
      property: 'cityName',
      label: 'Cidade',
      gridXlColumns: 2,
      gridLgColumns: 2,
    },
    { property: 'street', label: 'Rua', gridXlColumns: 2, gridLgColumns: 2 },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params.name ? `Visualizando ${params.name}` : 'Visualizando';
    });
  }
}
