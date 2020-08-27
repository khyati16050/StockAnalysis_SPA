import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
public bseExhangeName : string;

  constructor() { }

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
    console.log(json.marketSummaryResponse.result[0]);
  
  })	
})
.catch(err => {
	console.log(err);
});
  }
}
