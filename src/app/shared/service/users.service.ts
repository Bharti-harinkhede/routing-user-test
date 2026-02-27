
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { IUser } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr : IUser[]=[
    {
    "userName": "May",
    "userId": "125",
    "userRole": "Candidate",
    "profileDescription": "Frontend developer with Angular experience.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Angular", "TypeScript", "HTML", "CSS"],
    "experienceYears": 2,
    "isActive": true,
    "address": {
      "current": {
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "411001"
      },
      "permanent": {
        "city": "Latur",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "413512"
      }
    }
  },
  {
    "userName": "Rahul",
    "userId": "126",
    "userRole": "Candidate",
    "profileDescription": "Node.js backend developer working with MongoDB.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Node.js", "Express", "MongoDB"],
    "experienceYears": 3,
    "isActive": true,
    "address": {
      "current": {
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "400001"
      },
      "permanent": {
        "city": "Nagpur",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "440001"
      }
    }
  },
  {
    "userName": "Sneha",
    "userId": "127",
    "userRole": "HR",
    "profileDescription": "HR executive handling recruitment and onboarding.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Recruitment", "Communication", "MS Excel"],
    "experienceYears": 4,
    "isActive": true,
    "address": {
      "current": {
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "zipcode": "500001"
      },
      "permanent": {
        "city": "Nanded",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "431601"
      }
    }
  },
  {
    "userName": "Amit",
    "userId": "128",
    "userRole": "Admin",
    "profileDescription": "System administrator managing infrastructure.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Linux", "Networking", "AWS"],
    "experienceYears": 5,
    "isActive": false,
    "address": {
      "current": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "zipcode": "560001"
      },
      "permanent": {
        "city": "Solapur",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "413001"
      }
    }
  },
  {
    "userName": "Pooja",
    "userId": "129",
    "userRole": "Candidate",
    "profileDescription": "UI/UX designer with Figma and Adobe XD experience.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Figma", "Adobe XD", "Wireframing"],
    "experienceYears": 3,
    "isActive": true,
    "address": {
      "current": {
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "411002"
      },
      "permanent": {
        "city": "Kolhapur",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "416003"
      }
    }
  },
  {
    "userName": "Vikas",
    "userId": "130",
    "userRole": "Candidate",
    "profileDescription": "Full stack developer working on MEAN stack.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Angular", "Node.js", "MongoDB", "Express"],
    "experienceYears": 4,
    "isActive": true,
    "address": {
      "current": {
        "city": "Nashik",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "422001"
      },
      "permanent": {
        "city": "Aurangabad",
        "state": "Maharashtra",
        "country": "India",
        "zipcode": "431001"
      }
    }
  },
  {
    "userName": "Kiran",
    "userId": "131",
    "userRole": "Manager",
    "profileDescription": "Project manager handling multiple web projects.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Project Management", "Agile", "Scrum"],
    "experienceYears": 7,
    "isActive": true,
    "address": {
      "current": {
        "city": "Delhi",
        "state": "Delhi",
        "country": "India",
        "zipcode": "110001"
      },
      "permanent": {
        "city": "Jaipur",
        "state": "Rajasthan",
        "country": "India",
        "zipcode": "302001"
      }
    }
  },
  {
    "userName": "Neha",
    "userId": "132",
    "userRole": "Candidate",
    "profileDescription": "QA engineer experienced in manual and automation testing.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Selenium", "Manual Testing", "API Testing"],
    "experienceYears": 3,
    "isActive": false,
    "address": {
      "current": {
        "city": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
        "zipcode": "600001"
      },
      "permanent": {
        "city": "Madurai",
        "state": "Tamil Nadu",
        "country": "India",
        "zipcode": "625001"
      }
    }
  },
  {
    "userName": "Arjun",
    "userId": "133",
    "userRole": "Candidate",
    "profileDescription": "Data analyst working with Python and Power BI.",
    "profileImage": "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
    "skills": ["Python", "Power BI", "SQL"],
    "experienceYears": 2,
    "isActive": true,
    "address": {
      "current": {
        "city": "Indore",
        "state": "Madhya Pradesh",
        "country": "India",
        "zipcode": "452001"
      },
      "permanent": {
        "city": "Bhopal",
        "state": "Madhya Pradesh",
        "country": "India",
        "zipcode": "462001"
      }
    }
  }
  ]
  constructor() { }

  createUser(user: IUser): Observable<IUser> {
    let newUser: IUser = { ...user, userId: Date.now().toString() }
    this.usersArr.push(newUser)
    return of(newUser)
  }

 fetchUser(): Observable<IUser[]> {
    return of(this.usersArr)
  }

  fetchById(id: string): Observable<IUser> {
    let user1 = this.usersArr.find(u => u.userId === id)!
    return of(user1)
  }

  updatedUser(user: IUser): Observable<IUser> {
    let getIndex = this.usersArr.findIndex(u => u.userId === user.userId)
    this.usersArr[getIndex] = user
    return of(user)
  }

  removeUser(id: string): Observable<IUser> {
   

    let getIndex = this.usersArr.findIndex(u => u.userId === id)
if (getIndex === -1) {
  throw new Error('User not found');
}
let removedUser = this.usersArr.splice(getIndex, 1)
return of(removedUser[0])
  }
}
