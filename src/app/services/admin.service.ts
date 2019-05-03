import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllAuthors(query) {
    return this.http.get(
      environment.api_endpoint +
        environment.admin_endpoint +
        environment.get_all_authors +
        query
    );
  }

  deleteAuthor(id) {
    return this.http.get(
      environment.api_endpoint +
        environment.admin_endpoint +
        environment.deleteAuthor +
        id
    );
  }
}
