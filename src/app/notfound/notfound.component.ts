import { Component } from '@angular/core';
import { ContainerComponent } from "../components/container/container.component";
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: 'app-notfound',
  imports: [ContainerComponent, RouterLink, ButtonComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

}
