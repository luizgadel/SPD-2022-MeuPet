import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pet } from './models/pet.interface';

const API_URL = environment.API_URL + '/pets';

@Injectable({ providedIn: 'root' })
export class PetService {
  constructor(private http: HttpClient) {}

  list() {
    var petsSubject = new BehaviorSubject<Pet[]>(null!);

    this.http.get<{ pets: Pet[] }>(API_URL + '/').subscribe({
      next: (data) => petsSubject.next(data.pets),
      error: (err) => console.log('Erro ao listar pets:', err),
    });

    return petsSubject.asObservable();
  }

  show(id: String) {
    var petsSubject = new BehaviorSubject<Pet>(null!);

    this.http.get<{ pet: Pet }>(API_URL + `/${id}`).subscribe({
      next: (data) => petsSubject.next(data.pet),
      error: (err) => console.log('Error ao carregar pet: ', err),
    });

    return petsSubject.asObservable();
  }

  create(pet: Pet) {
    var petsSubject = new BehaviorSubject<Pet>(null!);

    this.http.post<{ pet: Pet }>(API_URL + '/', pet).subscribe({
      next: (data) => petsSubject.next(data.pet),
      error: (err) => console.log('Erro ao criar pet: ', err),
    });

    return petsSubject.asObservable();
  }

  edit(id: number, pet: Pet) {
    var petsSubject = new BehaviorSubject<Pet>(null!);

    this.http.put<{ pet: Pet }>(API_URL + `/${id}`, pet).subscribe({
      next: (data) => petsSubject.next(data.pet),
      error: (err) => console.log('Erro ao atualizar pet: ', err),
    });

    return petsSubject.asObservable();
  }

  delete(id: number) {
    var petsSubject = new BehaviorSubject<Pet>(null!);

    this.http.delete<{ pet: Pet }>(API_URL + `/${id}`).subscribe({
      next: (data) => {},
      error: (err) => console.log('Error deletar pet: ', err),
    });

    return petsSubject.asObservable();
  }
}
