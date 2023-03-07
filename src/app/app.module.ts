import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanceComponent } from './components/finance/finance.component';
import { StudiesComponent } from './components/studies/studies.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './components/finance/profile/profile.component';
import { AddTransactionsComponent } from './components/finance/add-transactions/add-transactions.component';
import { PaymentsComponent } from './components/finance/payments/payments.component';
import { OffersComponent } from './components/finance/offers/offers.component';
import { TransactionsComponent } from './components/finance/transactions/transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { AddDialogComponent } from './components/finance/add-transactions/add-dialog/add-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    StudiesComponent,
    HeaderComponent,
    ProfileComponent,
    AddTransactionsComponent,
    PaymentsComponent,
    OffersComponent,
    TransactionsComponent,
    AddDialogComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
