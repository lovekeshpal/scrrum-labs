import {Component, OnInit} from '@angular/core';
import {Transaction} from "./transaction.model";
import {TransactionServiceService} from "../../../services/transaction-service.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{

  constructor(private transactionService: TransactionServiceService) {
  }
  transactions: Transaction[] = [

  ]
  ngOnInit(): void {
    this.transactions = this.transactionService.getTransaction();
  }



}
