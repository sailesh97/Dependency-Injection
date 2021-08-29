import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService){}

    addAccount(name: string, status: string){
        this.accounts.push({name: name, status:status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}
/**Whever we add a new account or update an existing one, we call these two methods of accounts service. 
 * So it's better to log it here in one file instead of two different files
 * 
 * For injecting a service in another service, we need to attach some metadata in the service file where you want to inject another service.
 * That is: @Injectable().
 * 
 * In newer versions of Angular it's recommended to metion the metadata in every service file whether you inject another service in it or not.
 **/