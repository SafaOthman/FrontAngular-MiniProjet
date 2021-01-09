import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionService } from './gestion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontCatalogues';
  types: any=[];
  count: any;
  titre:string;
  id:any
constructor(private ser:GestionService,private route:Router,private act:ActivatedRoute ) { }
ngOnInit() {
 
  this.ser.getAlltypes().subscribe(
    data => {
      this.types = data;
    },
    err => { }
  )

  this.ser.getCount().subscribe(
    data => {
      this.count = data;
    },
    err => { }
  )
}

recherche() {
  this.route.navigate(['recherche/' + this.titre]);
}
}
