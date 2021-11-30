import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {

  public companyForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    cnpj: new FormControl(''),
    endereco: new FormControl(''),
    email: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<CompanyDialogComponent>,
    private fb: FormBuilder,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {

    this.companyForm = this.fb.group({
      name: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  save(){
    if(this.companyForm.valid){
      this.companyService.postData(this.companyForm.value).subscribe(result => {});
      this.cancel();
    } else{
      alert("Os campos são obrigatórios.");
    }

  }

  cancel(): void{
    this.dialogRef.close();
    this.companyForm.reset();
  }


}
