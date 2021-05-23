import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";

import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
