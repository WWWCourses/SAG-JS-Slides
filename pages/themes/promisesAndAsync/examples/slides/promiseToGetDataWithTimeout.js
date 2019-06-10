let getDataPromise = new Promise(function(resolve, reject) {
  setTimeout( ()=>{
    resolve('Here are the data!')
  }, 2000);
})

// usage
getDataPromise
  .then( data=>console.log(data) )
