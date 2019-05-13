import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { PopupComponent } from '../popup/popup.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-sever-request',
  templateUrl: './sever-request.component.html',
  styleUrls: ['./sever-request.component.css']
})

export class SeverRequestComponent implements OnInit {
  

  userName:string;
  response:any;
  private subject = new Subject<any>()
  constructor(private http:HttpClient,
              private dialog :MatDialog,
              
              ) { }

  ngOnInit() {
  }
  
  search(){
    this.http.get('http://api.github.com/users/'+this.userName)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
    
   
  }

 
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.subject.next({text:'hi hello'});
    this.dialog.open(PopupComponent,dialogConfig);
  }

 

}




