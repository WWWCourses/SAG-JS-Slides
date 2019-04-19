var examples = {

	'privateInClass': function(){
	//▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
		console.log(`privateInClass`);
		class Developer {
			public name:string;
			public age:number;
			public skills:Array<string>;
			private id=1;

			constructor(name, age, skills){
				this.name = name;
				this.age = age;
				this.skills = skills;
			}
		}

		let pesho = new Developer('pesho', 23, ['PHP', 'JS'])
		console.log(`pesho.age=${pesho.age}`);
		console.log(`pesho.id=${pesho.id}`);
	//▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
	},
}

examples.privateInClass();