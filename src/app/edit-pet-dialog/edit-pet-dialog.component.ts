import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pet } from '../services/models/pet.interface';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-edit-pet-dialog',
  templateUrl: './edit-pet-dialog.component.html',
  styleUrls: ['./edit-pet-dialog.component.scss'],
})
export class EditPetDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditPetDialogComponent>,
    private petService: PetService,
    @Inject(MAT_DIALOG_DATA) private data: Pet,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      RGA: [this.data.RGA, Validators.required],
      name: [this.data.name, Validators.required],
      photo: [this.data.photo, Validators.required],
      desc: [this.data.desc, Validators.required],
      species: [this.data.species, Validators.required],
      age: [this.data.age, Validators.required],
      gender: [this.data.gender],
      castrated: [this.data.castrated],
      wormed: [this.data.wormed],
      vacinated: [this.data.vacinated],
      value: [this.data.value, Validators.required],
    });
  }

  ngOnInit(): void {}

  savePet() {
    var pet: Pet = {
      RGA: 1,
      name: this.formGroup.get('name')?.value,
      photo: "",
      desc: "",
      species: "",
      age: "",
      gender: "",
      castrated: true,
      wormed: true,
      vacinated: true,
      value: 0.0,
      guardianCNPJ: '1'
    }

    this.petService.edit(pet.RGA, pet).subscribe()
    this.dialogRef.close("EDIT");
  }
}
