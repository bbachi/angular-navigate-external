import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppResolve } from './_resolvers/app.resolver';
import { BlankComponent } from './blank.component';


const routes: Routes = [
  { path: 'paymentmethod.htm',
      component: BlankComponent,
      resolve: {
        paymentMethods: AppResolve
      }
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
