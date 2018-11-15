import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableDragableComponent} from "./table-component/table-dragable/table-dragable.component";

const routes: Routes = [
  {path: 'table', component: TableDragableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
