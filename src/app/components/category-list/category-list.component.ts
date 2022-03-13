import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
 categories=new Array<Category>();
  constructor(private categoryService:CategoryServiceService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data)=>{
      this.categories=data;
      console.log('data',this.categories);
    },(error)=>{
      alert("Fail to fetch data")
    });
  }

}
