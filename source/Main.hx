package;

import AppFacade;


@:expose
class Main {
    
   public static function main(){
       
    }

    public static function start():AppFacade{
		var facade:AppFacade = AppFacade.getInstance();
		facade.sendNotification( Cmd.START_UP, {});
		return facade;
    }
    	
}