import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }

}
