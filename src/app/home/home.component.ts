import { Component, Input, OnInit } from '@angular/core';
import { Guardian, guardians } from '../dummy-data/guardians';
import { pets } from '../dummy-data/pets';

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
    email: "",
    password: "",
    address: "",
    telephone: "",
    photo: "",
    category: "",
    CNPJ: "",
    CMVS: "",
    CMCA: ""
  };

  guardianById(guardianCNPJ: string): Guardian {
    var g = guardians.find(g => g.CNPJ == guardianCNPJ)
    if (g != null) return g
    else return this.guardianZerado
  }
}
