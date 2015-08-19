package model;

import minject.*;
import Type;


import org.puremvc.haxe.patterns.proxy.Proxy;
import InjectionExample;

@:expose
class ServiceProxy extends Proxy
{

	/**
	 * Proxy name
	 */
	public static inline var NAME: String = "ServiceProxy";
	
	/**
	 * Constructor.
	 */
	public function new()
	{
		super(NAME);
		
	}

	// @:isVar var property(get, set):Int;
	// function get_property() { return property; }
	// function set_property(i) {return property = i; }

}