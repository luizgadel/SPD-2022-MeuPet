import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pet } from '../services/models/pet.interface';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-delete-pet-dialog',
  templateUrl: './delete-pet-dialog.component.html',
  styleUrls: ['./delete-pet-dialog.component.scss'],
})
export class DeletePetDialogComponent implements OnInit {
  pet: Pet

  constructor(
    private dialogRef: MatDialogRef<DeletePetDialogComponent>,
    private petService: PetService,
    @Inject(MAT_DIALOG_DATA) private data: Pet
  ) {
    this.pet = data
  }

  ngOnInit(): void {}

  deletePet(pet: Pet) {
    this.petService.delete(pet.RGA);
    this.close(true);
  }

  close(flag: Boolean) {
    let result = '';
    if (flag) result = 'DELETE';

    this.dialogRef.close(result);
  }
}
