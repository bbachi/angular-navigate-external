import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppResolve } from './_resolvers/app.resolver'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowobjComponent } from './windowobj/windowobj.component';
import { WithhrefComponent } from './withhref/withhref.component';
import { WithjqueryComponent } from './withjquery/withjquery.component';
import { WithresolverComponent } from './withresolver/withresolver.component';
import { BlankComponent } from './blank.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowobjComponent,
    WithhrefComponent,
    WithjqueryComponent,
    WithresolverComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
