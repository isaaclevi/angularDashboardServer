import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['enterprise', 'store'];
  dataSource = new UserDataSource(this.api);
  constructor(private api: ApiService) { }

  users: any;

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res => {
      console.log(res);
      this.users = res;
    }, err => {
      console.log(err);
    });
  }

}

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
