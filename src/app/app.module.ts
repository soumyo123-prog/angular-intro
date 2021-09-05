import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipieComponent } from './components/recipie/recipie.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipieBookComponent } from './components/recipie/recipie-book/recipie-book.component';
import { RecipieDetailComponent } from './components/recipie/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './components/recipie/recipie-item/recipie-item.component';
import { RecipieListComponent } from './components/recipie/recipie-list/recipie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipieComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipieBookComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    RecipieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
