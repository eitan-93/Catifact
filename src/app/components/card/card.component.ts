import { Component, OnInit, Input } from '@angular/core';
import { FactFetchService } from 'src/app/fact-fetch-service';

import {MatDialog } from '@angular/material/dialog';

import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //https://api.thecatapi.com/v1/images/search


  @Input() CatFact: any;
  // @Input() CatImageUrl: any;
  @Input() toggle: boolean;
  @Input() myuid: string;
  @Input() myfact: boolean;

  toggleLike  
  uid=''
  // CatImage

openDialog(): void {
  const dialogRef = this.dialog.open(UserDialogComponent, {
    width: '270px',
    data: { name: this.uid, text : "To Save a Fact,"}
  });

  dialogRef.afterClosed().subscribe(
    result => {console.log('The dialog was closed');
                this.uid = result;
                this.saveFact(this.CatFact,this.uid);
                },
    error => { console.log(error)},
    ()=>{} 
    
  )
}

saveFact(CatFact,uid){
  this.factfetchservice.saveFactToJSON(CatFact,uid)
  .subscribe((results: any ) => {console.log(results); });
}

removeFact(CatFactid,uid){
  this.factfetchservice.removeFactFromJSON(CatFactid,uid)
  .subscribe((results: any ) => {console.log(results); });
}


enableDisableRule() {
  this.toggleLike = !this.toggleLike;
  this.toggleLike ? (!this.myfact ? this.openDialog(): this.saveFact(this.CatFact,this.uid)) : this.removeFact(this.CatFact._id,this.uid); 

}

  constructor(private dialog: MatDialog,private factfetchservice: FactFetchService) { }

  ngOnInit(): void {
    this.toggleLike = this.toggle;
    this.uid=this.myuid;
  }

}
