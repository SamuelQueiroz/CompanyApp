import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDialogComponent } from './company-new/company-dialog/company-dialog.component';
import { CompanyRoutingModule } from './company-routing.module';


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDialogComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CompanyModule { }
