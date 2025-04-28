import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
// import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contacts.service';
import { iContact } from '../../interfaces/iContact';

@Component({
  selector: 'app-add',
  imports: [ContainerComponent, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  contactService = inject(ContactService)
  isOpenModal = false
  isOpenAlert = false

  toggleModal (type: null | string = 'add_contact_modal') {
    if(type === 'alert')
      this.isOpenAlert = !this.isOpenAlert
    else this.isOpenModal = !this.isOpenModal
  }

  addContactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contact_type: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    frequency: new FormControl('', [Validators.required]),
      })
  selected: number | null = null

  avatars = [
    { id: 1, src: 'img/avatar/avatar_1.jpg' },
    { id: 2, src: 'img/avatar/avatar_2.jpg' },
    { id: 3, src: 'img/avatar/avatar_3.jpg' },
    { id: 4, src: 'img/avatar/avatar_4.jpg' },
    { id: 5, src: 'img/avatar/avatar_5.jpg' },
    { id: 6, src: 'img/avatar/avatar_6.jpg' },
    { id: 7, src: 'img/avatar/avatar_7.jpg' },
    { id: 8, src: 'img/avatar/avatar.jpg' },
  ];

  setAvatar(id: number) {
    this.selected = id
  }

  handleSubmit () {
    if(this.addContactForm.errors === null) {
    const contact_item = {...this.addContactForm.value, avatar: this.selected ? this.avatars[this.selected - 1].src : 'img/avatar/avatar_8.png', tally: 0, last_contacted: new Date() } as iContact
    this.contactService.addContact(contact_item).subscribe((addedItemId) => {
      console.log(addedItemId)
      this.toggleModal()
      this.toggleModal('alert')
    })} else {
      console.log(this.addContactForm.errors)
    }
  }
}
