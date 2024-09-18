import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-project',
  standalone: true,
  imports: [],
  templateUrl: './view-project.component.html',
  styleUrl: './view-project.component.scss'
})
export class ViewProjectComponent {

  // if put this code only dialog box will add, delete, update data for database
  // !import MatDialogReg , Inject ,MAT_DIALOG_DATA
  constructor(public dialogRef: MatDialogRef<ViewProjectComponent>, @Inject(MAT_DIALOG_DATA) public data: any = null) { }

  ngOnInit() {
    // console.log(this.data);
  }

  close() {
    this.dialogRef.close(true);
  }

}
