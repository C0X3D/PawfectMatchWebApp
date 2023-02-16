import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BASE_PATH } from 'projects/lib-openapi';
import { ApiModule } from 'projects/lib-openapi/api.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginControllerComponent } from './common-components/login-controller/login-controller.component';
import { NavigationBarComponent } from './common-components/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './common-components/footer-bar/footer-bar.component';
import { UserDataServiceService } from 'src/user-services/user-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginControllerComponent,
    NavigationBarComponent,
    FooterBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,    
    HttpClientModule,
    ApiModule
  ],
  providers: [
    UserDataServiceService,
    { provide: BASE_PATH, useValue: "http://localhost:5045" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
