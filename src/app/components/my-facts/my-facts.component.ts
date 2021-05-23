import { Component, OnInit } from '@angular/core';
import { FactFetchService } from 'src/app/fact-fetch-service';
import {  MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-my-facts',
  templateUrl: './my-facts.component.html',
  styleUrls: ['./my-facts.component.css']
})



export class MyFactsComponent implements OnInit {

  searchText='';
  factlist=[]
  CatImageUrls = []
  uid=''

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '270px',
      data: { name: this.uid, text: "To Login,"}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.uid = result;
      
      this.getFactList()
    });
  }

  getImages() {
    this.factfetchservice.fetchCatImage()
      .subscribe((results: any[] ) => {this.CatImageUrls = results; console.log(results); });
  }
  
  getFactList(){
    this.factfetchservice.getFactsFromJSON(this.uid)
      .subscribe((results: any ) => {
        var res = []
        for (var key in results) {     
              res.push(results[key]);
          }  
        this.factlist = (results === undefined) ? [] : res;
        console.log(results); });
  }


  constructor(private dialog: MatDialog,private factfetchservice: FactFetchService) { }

  ngOnInit(): void {
    this.openDialog()
  }

}
