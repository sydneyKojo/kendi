import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import moment from 'moment'
import { ContactService } from '../../services/contacts.service';
import { iContact } from '../../interfaces/iContact';
import { ContainerComponent } from "../../components/container/container.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-contacts',
  imports: [ContainerComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  contactService = inject(ContactService)
  contacts = signal<iContact[]>([])
  showContactedModal = false
  
  toggleContactModal () {
    this.showContactedModal = !this.showContactedModal
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe({next: _contacts => {
      this.contacts.set(_contacts)
      console.log(_contacts)
    }, error: (err) => {
      console.log('error', err)
    }})
  }

  getDate(date: Date | number): string {
    return moment(date).format('hh:mm, ddd, DD MMM')
  }

  reachOutTo(contact: iContact) {
    this.contactService.updateContact({
      ...contact,
      tally: contact.tally + 1,
      last_contacted: Date.now()
    })
    if(contact.contact_type === 'phone') {
      window.open(`tel://${contact.contact}`)
    } else if(contact.contact_type === 'email') {
      window.open(`mailto://${contact.contact}`)
    } else {
      this.toggleContactModal()
    }
    console.log(contact)
  }


}
