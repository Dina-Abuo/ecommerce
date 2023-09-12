import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  storeData: Store = new Store('jumia', ['AA', 'LL', 'OO'], 'https://s23.q4cdn.com/836376591/files/images/irw/jumia-group-logo-new.png')

  constructor() {

  }

}
