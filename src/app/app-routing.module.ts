import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';

const routes: Routes = [
  {path:'category',component:CategoryListComponent},
  {path:'create/category',component:CreateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
