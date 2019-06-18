import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';

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