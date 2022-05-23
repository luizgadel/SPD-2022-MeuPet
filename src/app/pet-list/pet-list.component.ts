import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPetDialogComponent } from '../add-pet-dialog/add-pet-dialog.component';
import { Pet, pets } from '../pets';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  panelOpenState = false;
  pets = pets;
  genderEndingVowel = new Map<String, String>([
    ["masc", "o"],
    ["fem", "a"],
    ["nonbi", "e"]
  ]);


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddPetDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
