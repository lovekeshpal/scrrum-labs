import { Injectable } from '@angular/core';
import {Transaction} from "../components/finance/transactions/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  transactions: Transaction[] = [
    {remarks:"paid",
      transactionId: "ebfhwbgefcjkb",
      amount: 252,
      date: "23/02/2022" ,
      type: "debit"}
  ]
  constructor() { }

  setTransaction(newTransaction: any){
    this.transactions.push(newTransaction);
  }
  getTransaction(){
    return this.transactions;
  }
}
