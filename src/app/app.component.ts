import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  author = 'quotes-app';
  activeFilter = ''
  quoteData : any [] = [ ]
  filterQuotesData : any [] = [ ]

  constructor( public apiService : ApiService) { }

  ngOnInit(){
    this.apiService.getSomeData().subscribe(
      (data: any) => {
        this.quoteData = data;
        this.filterQuotesData = data;
        console.log(data)
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  filterQuotes(searchText: any){
    this.activeFilter = searchText;
    if(searchText === 'reset'){
      this.filterQuotesData = this.quoteData;
    }
    else{
      this.filterQuotesData = this.quoteData.filter((ele) => ele.quote.includes(searchText));
    }
  }

  getRand(){
    let rand = Math.floor(Math.random()*180)+20;
    let url = `https://picsum.photos/id/${rand}/600/300`;
    return url;
    
  }

  searchQuotes(data: any){
    console.log(data.target.value);
    if(data.target.value){
      this.filterQuotesData = this.quoteData.filter((ele) => ele.quote.includes(data.target.value));
    }
    else
    {
      this.filterQuotesData = this.quoteData;
    }
  }

}
