import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bake} from "../Bake";

@Component({
  selector: 'app-bakes',
  templateUrl: './bakes.component.html',
  styleUrls: ['./bakes.component.css']
})
export class BakesComponent implements OnInit {
url='https://localhost:44363/api/bakes';
resp:Bake[]=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  this.getapi()
  }
  getapi(){
  this.http.get<Bake[]>(this.url)
    .subscribe(a=>this.resp=a)
  }

}
