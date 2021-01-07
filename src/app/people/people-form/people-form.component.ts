import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
})
export class PeopleFormComponent implements OnInit {
  title = 'Nova pessoa';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/',
    save: '/',
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    {
      label: 'Nome',
      property: 'name',
      icon: 'po-icon po-icon-user',
      divider: 'Dados pessoais',
      gridXlColumns: 6,
    },
    {
      label: 'Gênero',
      property: 'genre',
      gridXlColumns: 4,
      options: [
        { value: 'female', label: 'Feminino' },
        { value: 'male', label: 'Masculino' },
      ],
    },
    {
      label: 'Data de nascimento',
      property: 'birthdate',
      type: 'date',
      gridXlColumns: 3,
    },
    {
      label: 'Nacionalidade',
      property: 'nationality',
      gridColumns: 3,
      required: true,
      options: [
        { label: 'Argentino', value: 'Argentino' },
        { label: 'Brasileiro', value: 'Brazilian' },
        { label: 'Chinês', value: 'Chines' },
        { label: 'Dinamarquês', value: 'Dinamarques' },
        { label: 'Espanhol', value: 'Espanhol' },
      ],
    },
    {
      label: 'Local de Nascimento',
      property: 'birthPlace',
      gridColumns: 3,
      required: true,
      options: [
        { label: 'Santa Catarina', value: 'Santa Catarina' },
        { label: 'São Paulo', value: 'São Paulo' },
        { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
        { label: 'Minas Gerais', value: 'Minas Gerais' },
      ],
    },
    {
      label: 'Nome da Mãe',
      property: 'mother',
      gridXlColumns: 4,
      icon: 'po-icon po-icon-users',
    },
    {
      label: 'Nome do Pai',
      property: 'father',
      gridXlColumns: 5,
      icon: 'po-icon po-icon-users',
    },
    {
      property: 'email',
      gridColumns: 5,
      icon: 'po-icon-mail',
      divider: 'Dados para contato',
    },
    {
      property: 'telefone',
      icon: 'po-icon po-icon-telephone',
      gridColumns: 4,
    },
    {
      property: 'github',
      icon: 'po-icon po-icon-telephone',
      gridColumns: 5,
    },
    {
      property: 'site Pessoal',
      icon: 'po-icon po-icon-world',
      gridColumns: 4,
    },
    {
      property: 'instagram',
      icon: 'po-icon po-icon-social-instagram',
      gridColumns: 5,
    },
    {
      property: 'twitter',
      icon: 'po-icon po-icon-social-twitter',
      gridColumns: 4,
    },
    {
      label: 'País',
      property: 'country',
      divider: 'Endereço',
      gridColumns: 3,
      required: true,
      options: [
        { label: 'Argentina', value: 'Argentina' },
        { label: 'Brasil', value: 'Brasil' },
        { label: 'China', value: 'China' },
        { label: 'Dinamarca', value: 'Dinamarca' },
        { label: 'Espanha', value: 'Espanha' },
      ],
    },
    {
      label: 'Estado',
      property: 'state',
      gridColumns: 3,
      required: true,
      options: [
        { label: 'Santa Catarina', value: 'Santa Catarina' },
        { label: 'São Paulo', value: 'São Paulo' },
        { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
        { label: 'Minas Gerais', value: 'Minas Gerais' },
      ],
    },
    {
      label: 'Cidade',
      property: 'cityName',
      gridColumns: 3,
      required: true,
      options: [
        { label: 'Araquari', value: 'Araquari' },
        { label: 'Campinas', value: 'Campinas' },
        { label: 'Osasco', value: 'Osasco' },
        { label: 'Joinville', value: 'Joinville' },
        { label: 'São Paulo', value: 'São Paulo' },
      ],
    },
    {
      property: 'street',
      label: 'Rua',
      icon: 'po-icon po-icon-pin',
      gridColumns: 9,
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params.id ? 'Editando' : 'Nova pessoa';
    });
  }
}
