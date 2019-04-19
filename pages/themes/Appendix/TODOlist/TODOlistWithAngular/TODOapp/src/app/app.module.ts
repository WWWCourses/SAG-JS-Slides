import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { StatsComponent } from './stats/stats.component';
import { HeaderComponent } from './header/header.component';
// TODO: check why insists on './'
import { itemComponent } from './items/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    StatsComponent,
    HeaderComponent,
    itemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
