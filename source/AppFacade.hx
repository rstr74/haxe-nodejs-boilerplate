package;

import org.puremvc.haxe.patterns.facade.Facade;
import controller.SimpleStartup;

@:expose
class AppFacade extends Facade
{

	// singleton instance of facade...
	private static var instance: AppFacade;
	
	public static function getInstance(): AppFacade
	{
		if( instance == null )
			instance = new AppFacade();
		return instance;
	}

	override private function initializeController(): Void
	{
		super.initializeController();
		registerCommand( Cmd.START_UP, SimpleStartup);
	}
	
}