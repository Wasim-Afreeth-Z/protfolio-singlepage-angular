import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-sended',
  standalone: true,
  imports: [],
  templateUrl: './message-sended.component.html',
  styleUrl: './message-sended.component.scss'
})
export class MessageSendedComponent {

  
  // if put this code only dialog box will add, delete, update data for database
  // !import MatDialogReg , Inject ,MAT_DIALOG_DATA
  constructor(public dialogRef: MatDialogRef<MessageSendedComponent>, @Inject(MAT_DIALOG_DATA) private data: any = null) { }

  close() {
    this.dialogRef.close(true);
  }

}
