import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../model/category';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryInfo:Category=new Category();
  date:any=new Date();
  createForm=new FormGroup({
    categoryName:new FormControl(''),
    categoryDescription:new FormControl(''),
    createdBy:new FormControl(''),
    creationDate:new FormControl(''),
    modifiedBy:new FormControl(''),
    modificationDate:new FormControl('')
  });
  constructor(private datePipe: DatePipe,private categroyService:CategoryServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.categoryInfo=this.createForm.value;
    this.categoryInfo.createdBy='Admin';
    this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss');
    this.categoryInfo.creationDate=this.date;
    console.log('form',this.categoryInfo);

    this.categroyService.createCategory(this.categoryInfo).subscribe((data)=>{
      console.log('data ',data);
      alert("Category Item created successfully");
      this.router.navigate(['category']);
    },(error)=>{
      alert("FAILED CREATION ERROR "+error);
    });
    
  }

  Cancel(){
    this.createForm.reset();
    this.router.navigate(['category']);
  }
}
