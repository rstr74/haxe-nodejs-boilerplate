package controller;

// import view.SomeMediator;

import org.puremvc.haxe.patterns.command.SimpleCommand;
import org.puremvc.haxe.interfaces.INotification;

@:expose
class InitViews extends SimpleCommand
{
	
	override public function execute( note: INotification ): Void
	{
		
		//var someMediator = new SomeMediator(cast someMediator);
		//facade.registerMediator(someMediator);
	}

}