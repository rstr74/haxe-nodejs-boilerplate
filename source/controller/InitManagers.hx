package controller;

import org.puremvc.haxe.patterns.command.SimpleCommand;
import org.puremvc.haxe.interfaces.INotification;

@:expose
class InitManagers extends SimpleCommand
{
	
	override public function execute( note: INotification ): Void
	{
		
	}

}