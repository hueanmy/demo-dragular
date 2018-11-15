import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableDragableComponent} from "./table-component/table-dragable/table-dragable.component";
import {ButtonModule} from 'primeng/button';
import {
  AccordionModule,
  CheckboxModule,
  DropdownModule,
  FieldsetModule,
  PanelModule
} from "primeng/primeng";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragulaModule, DragulaService} from "ng2-dragula";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TableDragableComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    CheckboxModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    AppRoutingModule,
    DropdownModule,
    FieldsetModule,
    AccordionModule,
    DragulaModule.forRoot(),
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
