import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/category';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryInfo:Category=new Category();
  categoryObject:Category=new Category();
  date:any;
  
  id:any;
  editForm=new FormGroup({
    categoryName:new FormControl(''),
    categoryDescription:new FormControl(''),
    createdBy:new FormControl(''),
    creationDate:new FormControl(''),
    modifiedBy:new FormControl(''),
    modificationDate:new FormControl('')
  });
  constructor(private router:Router,private activatedRoute:ActivatedRoute,
    private categoryService:CategoryServiceService,
    private datePipe:DatePipe
) {
      this.date=new Date();
        activatedRoute.paramMap.subscribe(parameterMap=>{
          this.id=parameterMap.get('id');
          console.log(this.id);
        });
   }

  ngOnInit(): void {
    this.categoryService.getCategoryById(this.id).subscribe((data)=>{
      this.categoryInfo=data;
      this.editForm.patchValue({
        id:this.categoryInfo.id,
        categoryName:data.categoryName,
        categoryDescription:data.categoryDescription,
        createdBy:data.createdBy,
        creationDate:data.creationDate,
        modifiedBy:data.modifiedBy,
        modificationDate:data.modificationDate
      })
    },error=>{
      alert('ERROR '+error.message)
    });
  }

  onSubmit(){
    this.categoryObject=this.editForm.value;
     this.categoryObject.modifiedBy='Admin';
     this.date=new Date();
     this.date=this.datePipe.transform(this.date,'yyyy-MM-dd HH:mm:ss');
     this.categoryObject.modificationDate=this.date;
    console.log('form',this.categoryObject);
    this.categoryService.updateCategory(this.id,this.categoryObject).subscribe((data)=>{
      alert('Category updated successfully');
      this.router.navigate(['category']);
    },(err)=>{
      alert("ERROR "+JSON.stringify(err));
    });
  }

  Cancel(){
    this.editForm.reset();
    this.router.navigate(['category']);
  }

}
