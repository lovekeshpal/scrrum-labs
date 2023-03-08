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

  uniqueID() {
    return "TXN" + Math.floor(Math.random() * Date.now())
  }

  transactionForm = new FormGroup({
    remarks:  new FormControl('', [Validators.required]),
    transactionId: new FormControl(''),
    date: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  })
  ngOnInit() {}
  onNoClick(): void {

    this.dialogRef.close();
  }
  onSubmit() {
    this.transactionForm.controls['transactionId'].setValue(this.uniqueID());
    // @ts-ignore
    this.transactionForm.controls['date'].setValue(this.transactionForm.controls['date'].value.toLocaleString().split(",",1));
    this.transactionService.setTransaction(this.transactionForm.value);
    this.dialogRef.close();
  }

  //For allowing user to enter the numbers only
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 47 || charCode > 57));


  }
}
