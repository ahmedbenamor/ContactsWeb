import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts : any;
  motCle : string = "";
  currentPage : number = 0;
  size : number = 5;

  pages : Array<number>;
  constructor(public http: Http, public contactsService: ContactsService ) { }

  ngOnInit() {

  }
  doSearch(){
  this.contactsService.getContacts(this.motCle, this.currentPage, this.size)
    .subscribe(data => {
      this.pageContacts = data;
      this.pages = new Array(data.totalPages);
    }, err => {
      console.log(err);
    });
  }

 chercher(){
    console.log(this.motCle+", "+this.currentPage+", "+this.size);
  this.doSearch();
  }

  gotoPage(i: number){
    this.currentPage = i;
    this.doSearch();
  }
}
