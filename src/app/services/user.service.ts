import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from './models/user.interface';

const API_URL = environment.API_URL + '/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  list() {
    var usersSubject = new BehaviorSubject<User[]>(null!);

    this.http.get<{ users: User[] }>(API_URL + '/').subscribe({
      next: (data) => usersSubject.next(data.users),
      error: (err) => console.log('Erro ao listar usuários:', err),
    });

    return usersSubject.asObservable();
  }

  show(id: String) {
    var usersSubject = new BehaviorSubject<User>(null!);

    this.http.get<{ user: User }>(API_URL + `/${id}`).subscribe({
      next: (data) => usersSubject.next(data.user),
      error: (err) => console.log('Error ao carregar usuário: ', err),
    });

    return usersSubject.asObservable();
  }

  create(user: User) {
    var usersSubject = new BehaviorSubject<User>(null!);

    this.http.post<{ user: User }>(API_URL + '/', user).subscribe({
      next: (data) => usersSubject.next(data.user),
      error: (err) => console.log('Erro ao criar usuário: ', err),
    });

    return usersSubject.asObservable();
  }

  edit(id: String, user: User) {
    var usersSubject = new BehaviorSubject<User>(null!);

    this.http.put<{ user: User }>(API_URL + `/${id}`, user).subscribe({
      next: (data) => usersSubject.next(data.user),
      error: (err) => console.log('Erro ao atualizar usuário: ', err),
    });

    return usersSubject.asObservable();
  }

  delete(id: String) {
    var usersSubject = new BehaviorSubject<User>(null!);

    this.http.delete<{ user: User }>(API_URL + `/${id}`).subscribe({
      next: (data) => {},
      error: (err) => console.log('Error deletar usuário: ', err),
    });

    return usersSubject.asObservable();
  }
}
