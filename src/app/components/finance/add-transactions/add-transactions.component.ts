import { Component } from '@angular/core';
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-transactions',
  templateUrl: './add-transactions.component.html',
  styleUrls: ['./add-transactions.component.css']
})
export class AddTransactionsComponent {




  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddDialogComponent);


  }

}
