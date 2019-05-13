let examples = {
  'switch': function(){
  //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
    let userCountry = 'France';

    switch (userCountry){
      case 'UK':
        console.log(`Welcome!`); break;
      case 'France':
        console.log(`Bienvenue!`); break;
      case 'Bulgaria':
        console.log(`Добре дошли!`); break;
      default:
        console.log(`Welcome!`); // no need for break, though we can put it.
    }
  //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
  },
  'switchWithoutBreak': function(){
  //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
    // demo without break:
    let userCountry = 'France';

    switch (userCountry){
      case 'UK':
        console.log(`Welcome!`);
      case 'France':
        console.log(`Bienvenue!`);
      case 'Bulgaria':
        console.log(`Добре дошли!`);
      default:
        console.log(`Welcome!`);
    }
  //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
  },
  'switchMultiMatch': function(){
  //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
    let x = 5;

    switch (x){
      case 2+3:
        console.log(`2+3`); break;
      case 2*3:
        console.log(`2*3`); break;
      case 3+2:
        console.log(`3+2`); break;
    }
  //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
  },
  'statementVsExpression': function(){
  //▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾//
    let x=1,y=1;

    function foo(){
      return 3;
    }

    // semicolons are mandatory after EACH expression:
    x=y+ // can be a nasty bug, if you mistyped 'y++' and don't care about semicolons
    foo();

    console.log(`x=${x}`);
    console.log(`y=${y}`);

    // compare with:
    // x=y+; // error - perfect, that what we want in this case!
    // foo();
    // console.log(`x=${x}`);
    // console.log(`y=${y}`);
  //▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴▴//
  },
};

examples.statementVsExpression();
