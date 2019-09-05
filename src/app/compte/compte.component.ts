import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  compteUserData = {}

  constructor(private _compte: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  compteUser() {
    console.log(this.compteUserData)
    this._compte.compteUser(this.compteUserData)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
 }

}
