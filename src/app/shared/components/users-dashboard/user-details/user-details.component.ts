import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { GetConfirmComponent } from 'src/app/shared/get-confirm/get-confirm.component';
import { IUser } from 'src/app/shared/models/users';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userObj !: IUser;
  userId !: string

  constructor(
    private _userService: UsersService,
    private _matDialog: MatDialog,
    private _activeRoyte: ActivatedRoute,
    private _router: Router,
    private _snackBar : SnackbarService

  ) { }

  ngOnInit(): void {

    this.userId = this._activeRoyte.snapshot.params['userId']


    console.log(this.userId)

    if (this.userId) {
      this._userService.fetchById(this.userId)
        .subscribe({
          next: data => {
            console.log(data);
            
            this.userObj = data
          },
          error: err => {
            console.log(err)
          }
        })
    }

  }

  onRemove() {
    let matConfig = new MatDialogConfig()
    matConfig.data = 'Are you sure ?You  want to Remove it ?'
    matConfig.width = '400px'
    this._matDialog.open(GetConfirmComponent, matConfig)
      .afterClosed()
      .pipe(
        filter(flag => flag === true),
        switchMap(() => {
          return this._userService.removeUser(this.userId)
        })
      )
      .subscribe({
        next: data => {
          console.log(data)
          this._router.navigate(['users'])
           this._snackBar.openSnackbar(` User Removed Successfully!!`)
        },
        error: err => {
          console.log(err)
        }
      })

  }

}


