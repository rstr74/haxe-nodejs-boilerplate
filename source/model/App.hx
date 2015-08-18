package model;

import org.puremvc.haxe.patterns.proxy.Proxy;

@:expose
class App extends Proxy
{

	/**
	 * Proxy name
	 */
	public static inline var NAME: String = "AppProxy";
	
	/**
	 * Constructor.
	 */
	public function new()
	{
		super(NAME);
	}

}