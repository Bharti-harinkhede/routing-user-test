import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { countriesData } from 'src/app/shared/consts/countryData';
import { ICountryCurrency } from 'src/app/shared/models/country';
import { IUser } from 'src/app/shared/models/users';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup
  countryArr: Array<ICountryCurrency> = countriesData

  isInEditMode: boolean = false
  userId!: string

  constructor(
    private _fb: FormBuilder,
    private _userService: UsersService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _snackbar : SnackbarService
  ) { }

ngOnInit(): void {
  this.createUserForm()
  this.addressControl()

  this.userId = this._activeRoute.snapshot.params['userId']

  if (this.userId) {
    this.isInEditMode = true

    this._userService.fetchById(this.userId)
      .subscribe(data => {

        this.userForm.patchValue(data)

        this.skillsArr.clear()
        data.skills.forEach(skill => {
          this.skillsArr.push(
            new FormControl(skill, Validators.required)
          )
        })

        this.checkAddSame()
      })

  } else {
    this.addSkills()
  }
}

  createUserForm() {
    this.userForm = this._fb.group({
      userName: [null, Validators.required],
      userRole: ['Candidate'],
      profileDescription: [null, Validators.required],
      profileImage: [null, Validators.required],
      experienceYears: [3],   // number
      isActive: [true],       // boolean
      address: this._fb.group({
        current: this._fb.group({
          city: [null, Validators.required],
          state: [null, Validators.required],
          country: ['India', Validators.required],
          zipcode: [null, Validators.required],
        }),
        permanent: this._fb.group({
          city: [null, Validators.required],
          state: [null, Validators.required],
          country: ['India', Validators.required],
          zipcode: [null, Validators.required],
        })
      }),
      isAddSame: [{ value: false, disabled: true }],
      skills: this._fb.array([])
    })
  }

  addressControl() {

    this.userForm.get('address.current')?.valueChanges
      .subscribe(() => {

        if (this.userForm.get('address.current')?.valid) {
          this.userForm.get('isAddSame')?.enable({ emitEvent: false })
        } else {
          this.userForm.get('isAddSame')?.disable({ emitEvent: false })
          this.userForm.get('isAddSame')?.reset()
        }
      })

    this.userForm.get('isAddSame')?.valueChanges
      .subscribe(flag => {

        if (flag) {
          const current = this.userForm.get('address.current')?.value
          this.userForm.get('address.permanent')?.patchValue(current)
          this.userForm.get('address.permanent')?.disable({ emitEvent: false })
        } else {
          this.userForm.get('address.permanent')?.enable({ emitEvent: false })
          this.userForm.get('address.permanent')?.reset()
        }
      })
  }

  get f(){
  return this.userForm.controls
  }

  checkAddSame() {

    const current = this.userForm.get('address.current')?.value
    const permanent = this.userForm.get('address.permanent')?.value

    const isSame = JSON.stringify(current) === JSON.stringify(permanent)

    if (isSame && this.userForm.get('address.current')?.valid) {
      this.userForm.get('isAddSame')?.enable({ emitEvent: false })
      this.userForm.get('isAddSame')?.setValue(true, { emitEvent: false })
      this.userForm.get('address.permanent')?.disable({ emitEvent: false })
    }
  }

  get skillsArr(): FormArray {
    return this.userForm.get('skills') as FormArray
  }

  addSkills() {
    this.skillsArr.push(
      new FormControl(null, Validators.required)
    )
  }

  onSkillRemove(i: number) {
    this.skillsArr.removeAt(i)
  }

  onUserAdd() {

    if (this.userForm.valid) {
      const user = this.userForm.getRawValue()

      this._userService.createUser(user)
        .subscribe(() => {
          this._router.navigate(['users'])
          this._snackbar.openSnackbar(`New User Created Successfully!!`)
        })
    }
  }

  onUpdate() {

    if (this.userForm.valid) {
      const updateObj = {
        ...this.userForm.getRawValue(),
        userId: this.userId
      }

      this._userService.updatedUser(updateObj)
        .subscribe(() => {
          this._router.navigate(['users'])
           this._snackbar.openSnackbar(` User Updated Successfully!!`)
        })
    }
  }
}