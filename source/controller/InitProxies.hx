package controller;

import org.puremvc.haxe.patterns.command.SimpleCommand;
import org.puremvc.haxe.interfaces.INotification;
import model.App;

@:expose
class InitProxies extends SimpleCommand
{
	
	override public function execute( note: INotification ): Void
	{
		var app = new App();
		facade.registerProxy(app);
	}

}