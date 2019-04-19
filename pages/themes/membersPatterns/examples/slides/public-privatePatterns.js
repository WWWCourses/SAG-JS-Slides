var examples = {
	'publicInLiteral': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var event = {
			name: 'Mariinsky Theatre Orchestra with Gergiev',
			date: '22.05.2017',
			time: '19.30',
			place: 'Bulgaria Hall',
		}

		console.log(`Event name: ${event.name}`);
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'privateInLiteral': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var event = {
			// public
			name: 'Mariinsky Theatre Orchestra with Gergiev',
			date: '22.05.2017',
			time: '19.30',
			place: 'Bulgaria Hall',
			timestamp: (function(){
				//private
				var ts = Date();
				return  ts;
			})()
		}

		setTimeout( ()=>{
			console.log(
				'event.timestamp: ' + event.timestamp + '\n' +
				'reported on' +Date()
			);
		}, 3000)
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'privateInConstructor': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var Event = function() {
			//private
			var timestamp = Date();

			// privileged
			this.timestamp = (function(){
				return timestamp;
			})();

			// public
			this.name = 'Mariinsky Theatre Orchestra with Gergiev';
			this.date = '22.05.2017';
			this.time = '19.30';
			this.place = 'Bulgaria Hall';

		}

		var event = new Event;
		setTimeout( ()=>{
			console.log(
				'event.timestamp: ' + event.timestamp + '\n' +
				'reported on' +Date()
			);
		}, 3000);

		// event.timestamp: Thu Jun 01 2017 14:12:42 GMT+0300 (EEST)
		// reported onThu Jun 01 2017 14:12:45 GMT+0300 (EEST)
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'privateInPrototype': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var Event = function() {
			// public
			this.name = 'Mariinsky Theatre Orchestra with Gergiev';
		}
		Event.prototype = (function(){
			// private
			var date = Date();

			// this is the actual prototype
			return {
				//privileged
				timestamp: date,
			}
		})();
		var event = new Event;

		setTimeout( ()=>{
			console.log(
				'event.timestamp: ' + event.timestamp + '\n' +
				'reported on' +Date()
			);
		}, 3000);
		console.dir(event);
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'privateInPrototypeCounter': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var Event = function(name) {
			// public
			this.name = name // '';
			this.id = Object.getPrototypeOf(this).countObj();
		}
		Event.prototype = (function(){
			// private
			var count = 1;

			// this is the actual prototype
			return {
				//privileged
				countObj: ()=>count++,

			}
		})();

		var events = [];
		for (var i = 0; i < 10; i++) {
			events.push(new Event(`Event ${i}`));
		}

		console.log(`events[0].id:  ${events[0].id}`);
		console.log(`events[4].id:  ${events[4].id}`);
		console.log(`events[9].id:  ${events[9].id}`);

	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'noPrototypeInstanceCounter': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		var Event = function(name) {
			// public
			this.name = name // '';
			this.id = Event.count++;

		}
		Event.count = 1;

		var events = [];
		for (var i = 0; i < 10; i++) {
			events.push(new Event(`Event ${i}`));
		}

		console.log(`events[0].id:  ${events[0].id}`);
		console.log(`events[4].id:  ${events[4].id}`);
		console.log(`events[9].id:  ${events[9].id}`);
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
	'privateInClass': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		console.log(`privateInClass`);
		class Developer {
			// the new 'private field' syntax:
			#id = 1;

			constructor(name, age, skills){
				this.name = name;
				this.age = age;
				this.skills = skills;
			}
		}

		let pesho = new Developer('pesho', 23, ['PHP', 'JS'])
		console.log(`pesho.age=${pesho.age}`);
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
}

examples.privateInClass();