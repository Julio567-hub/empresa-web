import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
 
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
})
export class Menu {}
