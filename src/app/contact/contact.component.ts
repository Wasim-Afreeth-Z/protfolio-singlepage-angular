import { Component, inject } from '@angular/core';
import Aos from 'aos';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageSendedComponent } from '../message-sended/message-sended.component';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  dialog = inject(MatDialog)
  snackBar = inject(MatSnackBar)

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

  //Emailjs
  //!npm i @emailjs/browser 
  SendMessage(): void {
    if (this.MessageForm.value.name !== null || this.MessageForm.value.email !== null || this.MessageForm.value.subject !== null || this.MessageForm.value.message !== null) {
      emailjs.init("GNNyoI12Q80AAG3rF")
      emailjs.send("service_vpi8oyd", "template_8yx9ytz", {
        subject: this.MessageForm.value.subject,
        to_name: "Wasim",
        from_name: this.MessageForm.value.name,
        from_email: this.MessageForm.value.email,
        message: this.MessageForm.value.message,
      });
      const dialog = this.dialog.open(MessageSendedComponent, {
        width: '600px',
        // height: '93%',
        // position: {
        //   top: '20px'
        // },
      })
      this.clearForm()
    } else {
      this.snackBar.open('All the field was required', 'Error', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    }
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
