import { Component, Input, OnInit } from '@angular/core';
import { Guardian, guardians } from '../guardians';
import { pets } from '../pets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  guardians = guardians;
  pets = pets;
  guardianZerado: Guardian = {
    name: "",
    address: "",
    photo: "",
    CNPJ: ""
  };

  guardianById(guardianCNPJ: string): Guardian {
    var g = guardians.find(g => g.CNPJ == guardianCNPJ)
    if (g != null) return g
    else return this.guardianZerado
  }
}
