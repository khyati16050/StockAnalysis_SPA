import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  natwest()
  {
    this.router.navigate(['natwest'])
  }
  niit()
  {
    this.router.navigate(['niit'])
  }
  kotak()
  {
    this.router.navigate(['kotak'])
  }
  sbi()
  {
    this.router.navigate(['sbi'])
  }
  icici()
  {
    this.router.navigate(['icici'])
  }

}
