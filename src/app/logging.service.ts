export class LoggingService{
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}
/**
 * Like before, we have followed the good practice while naming the folder and file name for service.
 * 
 * But to make typescript class, a component we mentioned @Component decorator, similarly for directive @Directive.
 * 
 * But we don't have mention any special decorator to make a typescript class as a service.
 * 
 * A service is just the normal typescript class like this.
 */