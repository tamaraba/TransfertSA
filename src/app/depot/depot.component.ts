import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  depotUserData = {}

  constructor(private depot: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  depotUser() {
    console.log(this.depotUserData)
    this.depot.depotUser(this.depotUserData)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
 }
}
