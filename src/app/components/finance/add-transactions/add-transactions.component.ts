import { Component } from '@angular/core';
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-transactions',
  templateUrl: './add-transactions.component.html',
  styleUrls: ['./add-transactions.component.css']
})
export class AddTransactionsComponent {

  animal: string = "";
  name: string = "";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
