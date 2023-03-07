import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FinanceComponent} from "./components/finance/finance.component";
import {StudiesComponent} from "./components/studies/studies.component";

const routes: Routes = [
  { path: 'finance', component: FinanceComponent },
  { path: 'studies', component: StudiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
