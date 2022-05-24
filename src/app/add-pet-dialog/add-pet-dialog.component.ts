import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Pet } from '../services/models/pet.interface';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-add-pet-dialog',
  templateUrl: './add-pet-dialog.component.html',
  styleUrls: ['./add-pet-dialog.component.scss'],
})
export class AddPetDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddPetDialogComponent>,
    private petService: PetService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      species: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      RGA: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      castrated: new FormControl(false, Validators.required),
      wormed: new FormControl(false, Validators.required),
      vacinated: new FormControl(false, Validators.required),
    });
  }

  ngOnInit(): void {}

  savePet() {
    if (this.form.valid) {
      var pet: Pet = {
        ...this.form.getRawValue(),
        species: this.form.get('species')?.value == 'one' ? 'Cachorro':'Gato'
      };

      this.petService.create(pet);
      this.dialogRef.close('OK');
    } else console.log('form is not valid');
  }
}
