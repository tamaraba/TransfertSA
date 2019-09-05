import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  formjuri=['SA', 'SARL', 'SUARL'];
  partenaireUserData = {}
  constructor(private _partenaire: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  partenaireUser() {
    console.log(this.partenaireUserData)
    this._partenaire.partenaireUser(this.partenaireUserData)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
 }
}
