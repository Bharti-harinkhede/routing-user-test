import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { IUser } from '../../models/users';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {

  usersArr: Array<IUser> = [];

  constructor(private _userService: UsersService,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }


  getUser() {
    this._userService.fetchUser()
      .subscribe(data => {
        this.usersArr = data
        console.log(data);

      })
  }


}