import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class HeaderauthonticationService {

isheader:boolean;
constructor() {
localStorage.setItem("isheader", JSON.stringify(this.isheader=true));

}
}
