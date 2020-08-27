import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'
import {NatwestComponent} from './natwest/natwest.component'
import {IciciComponent} from './icici/icici.component'
import {SbiComponent} from './sbi/sbi.component'
import {KotakComponent} from './kotak/kotak.component'
import {NiitComponent} from './niit/niit.component'



const routes: Routes = [
  
  {
    path: 'natwest',
    component: NatwestComponent,

  },
  {
    path: 'icici',
    component: IciciComponent,

  },
  {
    path: 'kotak',
    component: KotakComponent,

  },
  {
    path: 'niit',
    component: NiitComponent,

  },
  {
    path: 'sbi',
    component: SbiComponent,

  },
  {
    path: '', //default
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
