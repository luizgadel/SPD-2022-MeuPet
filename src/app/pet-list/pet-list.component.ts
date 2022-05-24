import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddPetDialogComponent } from '../add-pet-dialog/add-pet-dialog.component';
import { DeletePetDialogComponent } from '../delete-pet-dialog/delete-pet-dialog.component';
import { EditPetDialogComponent } from '../edit-pet-dialog/edit-pet-dialog.component';
import { Pet } from '../services/models/pet.interface';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  isTherePets = false;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private petService: PetService
  ) {
    this.updatePetList();
  }

  openCreatePetDialog() {
    const dialogRef = this.dialog.open(AddPetDialogComponent);

    dialogRef.afterClosed().subscribe((result: String) => {
      if (result == 'OK') {
        console.log('Pet added');
        this.updatePetList();
      }
      console.log('Pet not added');
    });
  }

  openEditPetDialog(pet: Pet) {
    const dialogRef = this.dialog.open(EditPetDialogComponent, {
      width: '840px',
      data: pet,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'EDIT')
        this.snackBar.open('Cliente editado com sucesso!', 'OK', {
          duration: 4000,
        });
    });
  }

  openDeletePetDialog(pet: Pet) {
    const dialogRef = this.dialog.open(DeletePetDialogComponent, {
      data: pet,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}

  updatePetList() {
    this.petService.list().subscribe((_pets) => {
      this.pets = _pets;
      if (_pets.length > 0) this.isTherePets = true;
      else this.isTherePets = false;
    });
  }
}
