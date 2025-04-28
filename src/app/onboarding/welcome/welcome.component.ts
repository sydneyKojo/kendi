import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, ContainerComponent, ButtonComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
