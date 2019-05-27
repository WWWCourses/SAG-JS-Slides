let student1 = {
  name: 'Pesho',
  greet: () => {
    console.log(`Hi, I'm ${this.name}`);
  }
}


student1.greet();

var cat = {
  lives: 9,
  jump: () => { this.lives--; }
}