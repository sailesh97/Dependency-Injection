import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Injecting a service in another service.
 * We'll inject the logging service in accounts-service.
 * 
 * For that we need to prove the service we want to inject in another service; in the highest possible level ie; app.module
 * Because if we provide the LoggingService i app.component, then same instance of LoggingService will be received by all the components in our app, but not by other services.
 * 
 * To get the same instance for all components, directives and other services we need to provide the the service we want to inject at the very top level of our app. That;s why app.module is the right place.
 * So for that we need to provide the service in app.module and remove from providers array of individual component of our application.
 * (Here we want LoggingService to be injected in AccountsService )
 */
