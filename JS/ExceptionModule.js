/*		Exception JavaScript Module
 *		Author: Daniel Beus
 *		Date: 10/4/2012
 */

(function()
{
	var Types = {
		Function: typeof function() {},
		Object: typeof {},
		String: typeof "",
		Number: typeof 1,
		Boolean: typeof false,
		Undefined: typeof undefined
	};

	(function(factory)
	{
		// Support three module loading scenarios
		// Taken from Knockout.js library
		if(typeof require === Types.Function && typeof exports === Types.Object && typeof model === Types.Object)
		{
			// [1] CommonJS/Node.js
			var target = module['exports'] || exports;
			factory(target);
		}
		else if(typeof define === Types.Function && define['amd'])
		{
			// [2] AMD anonymous module
			define(['exports'], factory);
		}
		else
		{
			// [3] No module loader (plain <script> tag) - put directly in global namespace
			factory(window['Exception'] = {});
		}
	})(function(ExceptionExports)
	{
		var Exception = typeof ExceptionExports !== Types.Undefined ? ExceptionExports : {};

		
		// Code in case the "bind" method hasn't been implemented by the browser
		if(!Function.prototype['bind'])
		{
			Function.prototype['bind'] = function(object)
			{
				var originalFunction = this,
					args = Array.prototype.slice.call(arguments),
					object = args.shift();
				return function()
				{
					return originalFunction.apply(object, args.concat(Array.prototype.slice.call(arguments)));
				}
			}
		}
		
		// Start Exception module code here
		// Any publicly accessible methods should be attached to the "Exception" object created above
		// Any private functions or variables can be placed anywhere

		Exception.Exception = function (message)
		{
			var self = this;
			self.message = message;
		}

		Exception.NotImplementedException = (function(undefined){
			// public API -- Constructor
			var NotImplementedException = function(message)
			{
				var self = this;
				Exception.Exception.call(self, message);
			}
		
			// Inherit from another class
			NotImplementedException.prototype = Exception.Exception.prototype; 
		
			NotImplementedException.prototype.version = '1.0'
		
			// Return Constructor
			return NotImplementedException;
		})();

		Exception.InvalidOperationException = (function(undefined){
			// public API -- Constructor
			var InvalidOperationException = function(message)
			{
				var self = this;
				Exception.Exception.call(self, message);
			}
		
			// Inherit from another class
			InvalidOperationException.prototype = Exception.Exception.prototype 
		
			InvalidOperationException.prototype.version = '1.0'
		
			// Return Constructor
			return InvalidOperationException;
		})();

		Exception.InvalidArgumentException = (function(undefined){
			// public API -- Constructor
			var InvalidArgumentException = function(message)
			{
				var self = this;
				Exception.Exception.call(self, message);
			}
		
			// Inherit from another class
			InvalidArgumentException.prototype = Exception.Exception.prototype; 
		
			InvalidArgumentException.prototype.version = '1.0'
		
			// Return Constructor
			return InvalidArgumentException;
		})();
	});
})();