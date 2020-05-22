import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  constructor(private _route: ActivatedRoute) {
  }

  ngAfterViewInit(){
debugger;
    this._route.snapshot.params; // active route's params

    this._route.snapshot.data; // active route's resolved data
 
    this._route.snapshot.component; // active route's component
 
    this._route.snapshot.queryParams // The query parameters shared by all the routes

  }

  

}
