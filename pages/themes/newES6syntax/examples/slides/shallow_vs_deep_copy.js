function shallow_copy(source){
  let p1 = {
    name: 'Pesho',
    address: {
      town: 'Sofia',
      zip: 1504
    }
  }

  let p2 = Object.assign({}, p1);
  console.log(p2.address);

  // now change p1
  p1.address.town = 'Plovdiv';

  // check if the change is reflected into p2
  console.log(p2.address);
}

function deep_copy(source){
  let p1 = {
    name: 'Pesho',
    address: {
      town: 'Sofia',
      zip: 1504
    }
  }

  let p2 = JSON.parse(JSON.stringify(p1));
  console.log(p2.address);

  // now change p1
  p1.address.town = 'Plovdiv';

  // check if the change is reflected into p2
  console.log(p2.address);
}
shallow_copy();
deep_copy();