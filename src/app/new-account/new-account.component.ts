import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
/*   @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
 */
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert("New status :" + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
   /*  this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    }); */
    this.accountsService.addAccount(accountName,accountStatus);


    //Wrong Approach
    /* const service = new LoggingService();
    service.logStatusChange(accountStatus); */ 

    //Right approach
    //this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}

/**
 * Though the above works fine, but this is wrong to use service like this.
 * Let's learn the right approach in next commit.
 */
/**
 * The right approach:
 * Instaniating a service class with new keyword is not the right approach. 
 * Angular offers some great tool like dependency injector to get access to our services.
 * 
 * What's a dependency injector?
 * 
 * Dependency Injector is something a class of ours will depend on.
 * For ex: New Account component depends on the loggingService as we call a method of loggingService here in New Account Component.
 * and the dependency injector simply injects this dependency i.e; inject an instance of the service class into our component automatically.
 *  
 * All we need to do is we need to inform angular that we need an instance of service class,
 * whenever a instance of new component class is created.
 * 
 * And to inform angular, we need to add a constructor where we want to use our service.
 * Here: NewAccountComponent
 * 
 * So in the constructor, we can bind an instance of LoggingService class to a property of NewAccountComponent class by using a typescript shortcut; i.e; by mentioning a access modifier before the name of an arguement,
 * 
 * What this shortcut will do is: It will instantly create a property with the same name and bind the value to it.
 * 
 * So the property name can be anything but the type assignment to that proeprty is mandatory
 * and the type has to be the class you want to get injected  (LoggingService in this case).
 * 
 * But how it gets injected by simply mentioning in constructor as an arguement.
 * 
 * Think about this like this way:
 * Who is responsible for creating the instance of new-account.component? Angular right? when it encounters its selector
 * 
 * So By mentioning in constructor, we are telling angular to bind an instance of logging service as well, while it is in the creation phase of instance of New Account component type.
 * 
 * We're not done yet to access our service. there's one last simple step.
 * 
 * Till now, Angular knows what we want, as we mentioned the arguement in constructor.
 * 
 * But it doesn't know how it will give us an instance of the service class. 
 * We need to pass an extra metadata in @Component decorator that is: providers array.
 * 
 * In providers array we just have to specify the type of what we want to be able to get provided.
 * 
 * As we used the TS Shortcut, the property is part of New Account class and can accessed through this.proertyName as other properties.
 * 
 */