var examples = {
    'privateInClass': function () {
        //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
        console.log("privateInClass");
        var Developer = /** @class */ (function () {
            function Developer(name, age, skills) {
                this.id = 1;
                this.name = name;
                this.age = age;
                this.skills = skills;
            }
            return Developer;
        }());
        var pesho = new Developer('pesho', 23, ['PHP', 'JS']);
        console.log("pesho.age=" + pesho.age);
        console.log("pesho.id=" + pesho.id);
        //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
    }
};
examples.privateInClass();
