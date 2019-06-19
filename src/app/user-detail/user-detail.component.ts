import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private _user = {};

  get user(){
    return this._user;
  }

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getUserDetails(this.route.snapshot.params['id']);
  }

  getUserDetails(id) {
    this.api.getUser(id)
      .subscribe(data => {
        console.log(data);
        this._user = data;
      });
  }

}
