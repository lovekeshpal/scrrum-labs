import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TransactionServiceService} from "../../../../services/transaction-service.service";

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit{


  constructor(private transactionService: TransactionServiceService,

    public dialogRef: MatDialogRef<AddDialogComponent>,

  ) {}

  transactionForm = new FormGroup({
    remarks:  new FormControl('', [Validators.required]),
    transactionId: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  })
  ngOnInit() {}
  onNoClick(): void {

    this.dialogRef.close();
  }
  onSubmit() {
    this.transactionService.setTransaction(this.transactionForm.value);
    this.dialogRef.close();
  }
}
