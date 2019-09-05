import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list-partenaire',
  templateUrl: './list-partenaire.component.html',
  styleUrls: ['./list-partenaire.component.css']
})
export class ListPartenaireComponent implements OnInit {

  public partenaires = [];

  constructor(private partenaireService :AuthService) { }

  ngOnInit() {
    this.partenaireService.getPartenaires()
      .subscribe(data => this.partenaires = data);
  }

}
