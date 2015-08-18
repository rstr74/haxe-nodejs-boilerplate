package controller;

import org.puremvc.haxe.patterns.command.SimpleCommand;
import org.puremvc.haxe.interfaces.INotification;

@:expose
class RunCommand extends SimpleCommand
{
	override public function execute( note: INotification ): Void
	{
		trace("RUN FORREST! RUN!");
	}

}