import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Company } from './../models/company.model';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

import { CompanyDialogComponent } from '../company-new/company-dialog/company-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  company: Company[] = [];
  displayedColumns: string[] = ['id', 'name', 'cnpj', 'endereco', 'email'];

  rowSelected: string = '';


  constructor(
    private companyService: CompanyService,
    public dialog: MatDialog
    ) { }


  ngOnInit(): void {
    this.getdata();
  }

  addCompany(): void {
    const dialogRef = this.dialog.open(CompanyDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editCompany(){
  }

  eraseCompany(){
    this.companyService.deleteData(this.rowSelected).subscribe();
    this.rowSelected = '';
  }

  refresCompany(){
    this.getdata();
  }

  getdata() {
    this.companyService.getData().subscribe(data => {
      this.company = data;
    })
  }

  rowClicked(row: any){
    this.rowSelected = row.id;
  }
}
