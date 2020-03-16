import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  eventoclick(){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
      var digimon =  JSON.parse(this.responseText)
        alert(digimon[0].name);
      }
    });
    xhr.open("GET", "https://digimon-api.herokuapp.com/api/digimon/id/7");
    xhr.send();
  }

}
