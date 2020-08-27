import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kotak',
  templateUrl: './kotak.component.html',
  styleUrls: ['./kotak.component.css']
})
export class KotakComponent implements OnInit {
  public zip :string;
  public industry : string;
  public employee : string;
  public sector : string;
  public address : string;
  public exchange :string;
  public name : string;
  public time : string;
  public profitMargin : string;
  public grossMargin : string;
  public revenue :string;
  public news1: string;
  public news2: string;
  public news3: string;
  
  
    constructor() { }
  
    ngOnInit() {
      this.getStockDetail();
      this.getNews();
    }
    getStockDetail()
    {
      fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=IN&lang=en&symbol=KOTAKBANK.NS", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "25691efbbbmsh3892ce9c0a7bd85p1058b2jsn0d9d4e8f9157"
	}
})
  .then(response => {
    response.json().then(json => {
      this.zip = json.summaryProfile.zip;
      this.sector = json.summaryProfile.sector;
      this.address = json.summaryProfile.address1
      this.employee = json.summaryProfile.fullTimeEmployees;
      this.industry = json.summaryProfile.industry;
      this.time = json.price.postMarketTime;
      this.name = json.price.shortName;
      this.exchange = json.price.exchange;
      this.profitMargin = json.financialData.profitMargins.raw;
      this.grossMargin = json.financialData.grossMargins.raw;
      this.revenue = json.financialData.revenueGrowth.raw;
      
      
      
    
    })	
  })
  .catch(err => {
    console.log(err);
  });
    }
    getNews()
    {
      fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=IN&category=KOTAKBANK.NS", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
          "x-rapidapi-key": "25691efbbbmsh3892ce9c0a7bd85p1058b2jsn0d9d4e8f9157"
        }
      })
  .then(response => {
    response.json().then(json => {
      this.news1 = json.items.result[0].title;
      this.news2 = json.items.result[1].title;
      this.news3 = json.items.result[2].title;
      
      
      
    
    })	
  })
  .catch(err => {
    console.log(err);
  });
    }
  
  
  }
  