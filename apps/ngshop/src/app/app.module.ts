import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UiModule } from '@bluebits/ui';
import {AccordionModule} from 'primeng/accordion';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'products', component: ProductListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
  ],

  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), UiModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
