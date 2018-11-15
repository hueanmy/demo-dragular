import { Component, OnInit } from '@angular/core';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-table-dragable',
  templateUrl: './table-dragable.component.html',
  styleUrls: ['./table-dragable.component.scss']
})
export class TableDragableComponent implements OnInit {
  boxData: any[] = [];
  data: any;
  id: number = -1;
  keys: any[] = [];
  public constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup("SPILL", {
      removeOnSpill: true
    });
  }

  ngOnInit() {
  }

  clicked(event) {
    this.id += 1;
    this.data = {id: this.id, checkbox: false, field: '', expanded: false};
    this.boxData.push(this.data);
  }

  checkAll(){
    for(const i of this.boxData){
      if(i.checkbox === false){
        i.checkbox = true;
      }
    }
  }
  onExpand(){
    for(const i of this.boxData){
      if(i.expanded === false){
        i.expanded = true;
      }
    }
  }

  onColapse(){
    for(const i of this.boxData){
      if(i.expanded === true){
        i.expanded = false;
      }
    }
  }

  onDelete(){
    for(const i of this.boxData){
      if(i.checkbox === true){
        this.boxData.splice(i, 1);
      }
    }
  }
  public onclick(key: any) {
    this.clicked[key] = true;
    setTimeout(() => {
      this.clicked[key] = false;
    }, 2000);
  }

}
