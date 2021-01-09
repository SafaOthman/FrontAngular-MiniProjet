import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pfe } from './pfe';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
  
getAllPfes(){
  return this.http.get("http://127.0.0.1:8004/rest/pfes")
}

addPFE(p:Pfe){
  return this.http.post("http://127.0.0.1:8004/rest/addPFE",p)
}
getAlltypes(){
  return this.http.get("http://127.0.0.1:8004/rest/listetype")
}
delete(id:number){
return this.http.delete("http://127.0.0.1:8004/rest/delete/"+id)
}
getPfeByTypePfe (id:number){
  return this.http.get("http://127.0.0.1:8004/rest/listepfe/"+id)
}
recherche(titre:string){
  return this.http.get("http://127.0.0.1:8004/rest/recherche/"+titre)
}
getCount(){
  return this.http.get("http://127.0.0.1:8004/rest/count")
}
}
