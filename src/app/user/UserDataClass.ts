import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable, from } from 'rxjs';

export class UserDataSource extends DataSource<any> {
    constructor(private api: ApiService) {
      super()
    }
  
    connect() {
      return this.api.getUsers();
    }
  
    disconnect() {
  
    }
  }