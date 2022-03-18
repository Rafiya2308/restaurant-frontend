import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../model/category';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
 categories=new Array<Category>();
 page=1;
 pageSize=7;
  totalRecords: Number=0;

 constructor(private categoryService:CategoryServiceService,private router:Router) {

 }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data)=>{
      this.categories=data;
      this.totalRecords=this.categories.length;
      
      console.log('data',this.categories);
    },(error)=>{
      alert("Fail to fetch data")
    });
  }

  delete(id:any){
   this.categoryService.deleteCategory(id).subscribe((data)=>{
      alert("Category Item deleted successfully");
      location.reload();
   },(error)=>{
     console.log(error)
      alert(error.message)
   })
  }
}
