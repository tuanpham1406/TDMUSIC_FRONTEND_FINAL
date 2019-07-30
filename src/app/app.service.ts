import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IApp} from './app';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly API_URL = '';

  constructor(private http: HttpClient) {
  }

  getPosts(count = 10): Observable<IApp[]> {
    return this.http.get<IApp[]>(this.API_URL);
  }

  getPostById(id: number): Observable<IApp> {
    return this.http.get<IApp>(`${this.API_URL}/${id}`);
  }
}
