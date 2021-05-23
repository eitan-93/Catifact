import { Component, OnInit } from '@angular/core';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { FactFetchService } from 'src/app/fact-fetch-service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  constructor(private factfetchservice: FactFetchService) { }

  CatImageUrls = []
  CatFacts = []

  getImages() {
    this.factfetchservice.fetchCatImage()
      .subscribe((results: any[] ) => {this.CatImageUrls = results; console.log(results); });
  }
  download() {

    this.factfetchservice.fetchFacts()
      .subscribe((results: any[] ) => {this.CatFacts = (results === undefined) ? [] : results;  
                                                  console.log(results); });
  }



  ngOnInit() {
    // this.slides = this.chunk(this.cards, 3);
    this.download() 
    this.getImages()
  }

  // slides = []

  // chunk(arr, chunkSize) {
  //   let res = [];
  //   for (let i = 0, len = arr.length; i < len; i += chunkSize) {
  //     res.push(arr.slice(i, i + chunkSize));
  //   }
  //   return res;
  // }


}
