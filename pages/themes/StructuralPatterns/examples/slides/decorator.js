function compositDecorate(component){
	const protoComp = Object.getPrototypeOf(component);

	function Decorator(component){
		this.component = component;
	}
	Decorator.prototype = Object.create(protoComp);


	//new method
	Decorator.prototype.greetings = function(){
		return 'Good evening';
	};
	//delegated method
	Decorator.prototype.hello = function(){
		return this.component.hello.apply(this.component, arguments);
	};
}

function objectDecorate(component){
	//assign new method to component
	component.greetings = () => {
		console.log(`Howdy`);
	};

	return component;
}

function jQueryDecorator(){
	var decoratorApp = decoratorApp || {};

	// define the objects we're going to use
	decoratorApp = {
    defaults: {
    		bool:false,
        someDefaults: function(){
            console.log( "someDefaults actions" );
        }
    },
    options: {
        bool: true,
        optionsAction: function(){
            console.log( "optionsAction" );
        }
  	},
  	settings: {},

    printObj: function( obj ){
        var arr = [];
        var next;

        $.each( obj, function( key, val ){
            next = key + ": ";
            next += $.isPlainObject(val) ? printObj( val ) : val;
            arr.push( next );
        } );

        return "{ " + arr.join(", ") + " }";
    }

	};

	// merge defaults and options, without modifying defaults explicitly
	decoratorApp.settings = $.extend({}, decoratorApp.defaults, decoratorApp.options);

	$("#log")
	    .append( decoratorApp.printObj(decoratorApp.settings) +
	          + decoratorApp.printObj(decoratorApp.options) +
	          + decoratorApp.printObj(decoratorApp.defaults));
}

function functionArgsDecorator(){
  // decorator function defined with function declaration
  function logDecorator(f){
    return  function(...args){
      console.log(`${f.name} called with args: ${args}`);
      return f(...args);
    }
  }

  // decorator function defined with lambda (arrow function syntax)
  const logDecoratorLambdas = f => (...args) => {
    console.log(`${f.name} called with args: ${args}`);
    return f(...args);
  }

  // the function to be decorated
  function add(x,y){
    return x+y;
  }

  // decorate the add function
  const decoratedAdd = logDecorator(add);
  const lambdasDecoratedAdd = logDecoratorLambdas(add);

  // use the decorated function
  console.log(decoratedAdd(2,3));
  console.log(lambdasDecoratedAdd(2,3));
}


function functionDecorator(){
  // just a helper function
  function getCurrentDate(){
    let d = new Date();
    return `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`
  }

  // decorator function defined with function declaration
  function decorator(f){
    console.log(`${f.name} was called on ${getCurrentDate()}`);
    return f
  }

  // decorator function defined with lambda (arrow function syntax)
  const lambdaDecorator = f => {
    console.log(`${f.name} was called on ${getCurrentDate()}`);
    return f
  }

  // the function to be decorated
  function howdy(){
    console.log(`Howdy World!`);
  }

  // decorate the function
  howdy = lambdaDecorator(howdy)

  // use the decorated function
  howdy();
}

functionDecorator()