async function run(){
    console.log(`1`);
    await sleep(1000);
    console.log(`2`);
    await sleep(2000);
}

function makeDelayWithTimeout(callback, time=1000){
    setTimeout(callback, time)
}

function sleep(time){
    return new Promise(resolve => )
}


run();
console.log(`End`)