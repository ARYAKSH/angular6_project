import { Component, OnInit } from '@angular/core';

import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  message: any;
  subscription: Subscription;
  private subject = new Subject<any>();

  constructor() { 
    this.subscription = this.subject.asObservable().subscribe(message => { this.message=message });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
