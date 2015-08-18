package controller;

import AppFacade;
import controller.InitManagers;
import controller.InitProxies;
import controller.InitViews;
import controller.RunCommand;

import org.puremvc.haxe.patterns.command.MacroCommand;
import org.puremvc.haxe.interfaces.INotification;


@:expose
class SimpleStartup extends MacroCommand
{
	override function initializeMacroCommand():Void {
			addSubCommand(InitManagers);
			addSubCommand(InitProxies);
			addSubCommand(InitViews);
			addSubCommand(RunCommand);
	}
}