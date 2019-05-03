import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthorComponent } from './admin/author/author.component';

import { PagerService } from './services/pager.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    BorrowerComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
