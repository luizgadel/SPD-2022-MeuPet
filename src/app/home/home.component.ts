import { Component } from '@angular/core';
import { Guardian } from '../services/models/guardian.interface';
import { Pet } from '../services/models/pet.interface';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pets: Pet[] = [];
  isTherePets = false;
  guardians: Guardian[] = [];
  guardianZerado: Guardian = {
    name: '',
    email: '',
    password: '',
    address: '',
    telephone: '',
    photo: '',
    category: '',
    CNPJ: '',
    CMVS: '',
    CMCA: '',
  };

  constructor(
    private petService: PetService,
    private userService: UserService
  ) {
    this.petService.list().subscribe({
      next: (_pets) => {
        this.pets = _pets;
        if (_pets.length > 0) this.isTherePets = true;
        else this.isTherePets = false;
      },
    });

    this.userService.list().subscribe({
      next: (_users) => {
        _users.forEach((u) => {
          var g = u as Guardian;
          if (g.category != undefined) this.guardians.push(g);
        });
      },
    });
  }

  guardianById(guardianCNPJ: string): Guardian {
    var g = this.guardians.find((g) => g.CNPJ == guardianCNPJ);
    if (g != null) return g;
    else return this.guardianZerado;
  }
}
