import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { ContainerComponent } from "../../components/container/container.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  imports: [ContainerComponent, RouterLink],
  templateUrl: './add-contacts.component.html',
  styleUrl: './add-contacts.component.css'
})
export class AddContactsComponent {

}
