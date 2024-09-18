import { Component, inject } from '@angular/core';
import Aos from 'aos';
import { CommanService } from '../../Services/comman.service';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageSendedComponent } from '../message-sended/message-sended.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  MessageForm!: FormGroup

  // inject
  formBuilder = inject(FormBuilder)
  commanService = inject(CommanService)
  authService = inject(AuthService)
  dialog = inject(MatDialog)

  ngOnInit() {
    this.MessageForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    })

    Aos.init({ disable: 'mobile' });//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  // // send the data to admin service file
  SendMessage(): void {
        const dialog = this.dialog.open(MessageSendedComponent, {
          width: '600px',
          // height: '93%',
          // position: {
          //   top: '20px'
          // },
        })
        this.clearForm()
  }

  clearForm() {
    this.MessageForm.reset({
      'name': null,
      'email': null,
      'subject': null,
      'message': null,
    });
  }

  isSubmitted: boolean = false

  isSubmit(): void {
    this.isSubmitted = true
  }

  MessageAndSubmit() {
    this.SendMessage()
    this.isSubmit()
  }

}
