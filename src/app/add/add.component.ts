import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { Pfe } from '../pfe';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  types: any=[];
  pfe: Pfe = new Pfe();
  constructor(private ser:GestionService,private route:Router) { }
 
  ngOnInit(): void {
   
  this.ser.getAlltypes().subscribe(
    data=>{this.types=data},
   err=>{}
  );
  }
  save(){
    this.ser.addPFE(this.pfe).subscribe(
      data=>{
        this.route.navigate(['liste'])
      },
      err=>{}
    );
  }
}
