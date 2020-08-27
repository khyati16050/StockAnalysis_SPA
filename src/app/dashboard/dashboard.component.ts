import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public bseExchangeName : string;
  public bsePrice : string;
  public bseTime : string;
  public bseClose : string;
  public bseChange : string;
  public nseExchangeName : string;
  public nsePrice : string;
  public nseTime : string;
  public nseClose : string;
  public nseChange : string;
  
  constructor() { 
    
  }

  ngOnInit() {
  this.getSummary();
  console.log(this.bseExchangeName);
}
getSummary()
  {
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=IN&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "25691efbbbmsh3892ce9c0a7bd85p1058b2jsn0d9d4e8f9157"
	}
})
.then(response => {
  response.json().then(json => {
    // console.log(json.marketSummaryResponse.result[0]);
    this.bseExchangeName = json.marketSummaryResponse.result[0].fullExchangeName;
    this.bsePrice = json.marketSummaryResponse.result[0].regularMarketPrice.raw;
    this.bseClose = json.marketSummaryResponse.result[0].regularMarketPreviousClose.raw;
    this.bseTime = json.marketSummaryResponse.result[0].regularMarketTime.raw;
    this.bseChange = json.marketSummaryResponse.result[0].regularMarketChangePercent.raw;
    this.nseExchangeName = json.marketSummaryResponse.result[1].fullExchangeName;
    this.nsePrice = json.marketSummaryResponse.result[1].regularMarketPrice.raw;
    this.nseClose = json.marketSummaryResponse.result[1].regularMarketPreviousClose.raw;
    this.nseTime = json.marketSummaryResponse.result[1].regularMarketTime.raw;
    this.nseChange = json.marketSummaryResponse.result[1].regularMarketChangePercent.raw;
    
  
  })	
})
.catch(err => {
	console.log(err);
});
}
}



   





