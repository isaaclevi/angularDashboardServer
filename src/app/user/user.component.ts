import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserDataSource} from './UserDataClass';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['enterprise', 'store'];
  dataSource = new UserDataSource(this.api);
  constructor(private api: ApiService) { }

  private _users: any;

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res => {
      console.log(res);
      this._users = res;
    }, err => {
      console.log(err);
    });
    //console.log();
  }

  get users(){
    return this._users;
  }
}