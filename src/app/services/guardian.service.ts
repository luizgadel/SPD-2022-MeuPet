import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Guardian } from './models/guardian.interface';

const API_URL = environment.API_URL + '/guardian';

@Injectable({ providedIn: 'root' })
export class GuardianService {
  constructor(private http: HttpClient) {}

  list() {
    var guardiansSubject = new BehaviorSubject<Guardian[]>(null!);

    this.http.get<{ users: Guardian[] }>(API_URL + '/').subscribe({
      next: (data) => guardiansSubject.next(data.users),
      error: (err) => console.log('Erro ao listar tutores:', err),
    });

    return guardiansSubject.asObservable();
  }

  show(id: String) {
    var guardiansSubject = new BehaviorSubject<Guardian>(null!);

    this.http.get<{ guardian: Guardian }>(API_URL + `/${id}`).subscribe({
      next: (data) => guardiansSubject.next(data.guardian),
      error: (err) => console.log('Error ao carregar tutor: ', err),
    });

    return guardiansSubject.asObservable();
  }

  create(guardian: Guardian) {
    var guardiansSubject = new BehaviorSubject<Guardian>(null!);

    this.http.post<{ guardian: Guardian }>(API_URL + '/', guardian).subscribe({
      next: (data) => guardiansSubject.next(data.guardian),
      error: (err) => console.log('Erro ao criar tutor: ', err),
    });

    return guardiansSubject.asObservable();
  }

  edit(id: String, guardian: Guardian) {
    var guardiansSubject = new BehaviorSubject<Guardian>(null!);

    this.http.put<{ user: Guardian }>(API_URL + `/${id}`, guardian).subscribe({
      next: (data) => guardiansSubject.next(data.user),
      error: (err) => console.log('Erro ao atualizar tutor: ', err),
    });

    return guardiansSubject.asObservable();
  }

  delete(id: String) {
    var guardiansSubject = new BehaviorSubject<Guardian>(null!);

    this.http.delete<{ guardian: Guardian }>(API_URL + `/${id}`).subscribe({
      next: (data) => {},
      error: (err) => console.log('Error deletar tutor: ', err),
    });

    return guardiansSubject.asObservable();
  }
}
