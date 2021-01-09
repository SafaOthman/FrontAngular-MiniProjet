import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  titre: string;
  pfes:any=[];
  constructor(private ser: GestionService,private act:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.act.paramMap.subscribe((params: ParamMap) => {
      this.titre = params.get('titre');
      this.recherche(this.titre)
    });
  }
  recherche(titre:string)
  {
    this.ser.recherche(titre).subscribe(
      data=>{this.pfes=data},
      
      err=>{ }
    );
  }
  delete(id:number){
    this.ser.delete(id).subscribe(
      data=> { this.ngOnInit()  },
      err => {  }
    )
  }
}
