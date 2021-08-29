import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = []; // Array of objects
  constructor(private accountsService: AccountsService){}
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}

/**
 * Though it's a valid syntax of providing the services in each individual component,
 * The way we used services here is wrong.
 * So in our application as the account service in new-account component and in app-component are different. We re pushing the new account in one instance of accounts service and looping through another instance of accounts-service in our app.component.
 * That's why our application is broken.
 * 
 * Let's dive deeper.
 * 
 * The Angular dependency injector is a heirarchical injector. That means If we provide a service in one component of our app,
 * Angular will create only one instance of that service for the component it is injected in and for all it's child component.
 * 
 * They will receive the same instance of the service.
 * 
 * Different places in our app where we can provide services:
 * 
 * 1. AppModule:
 *  The highest possible level where we can provide a service is AppModule.
 *  If we provide a service here, the same instance of the service will be received by our whole application(in all components, all directive and in all services as well)
 *  
 * 2. AppComponent:
 *  By providing here we can ensure that the same instance of the service will be received by all components(but not for other services.)
 * 
 * 3. Any other component:
 *  By providing in an individual component, we can ensure that the same instance will be received by that component and all the child compoennt of that component.
 * 
 * 
 * Note-1:
 * All the 3places mentioned above has a providers array. By mentioning there we can provide a service.
 * 
 * Note-2:
 * If we provide a service in AppModule and also in app.component;
 * Then the service we provided in AppComponent will override the instance of the service provided by AppModule.
 * 
 */