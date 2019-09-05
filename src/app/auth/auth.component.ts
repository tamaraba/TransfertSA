import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authUserData = {}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  authUser() {
this._auth.authUser(this.authUserData)
    .subscribe(
      res =>{
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['./auth'])
        },
      err => console.log(err)
    )
  }

}
