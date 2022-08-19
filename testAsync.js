/*
// 동기화 방식
function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
}//run()
 
run();
console.log('Done !!!');
*/
/**
 * 비동기 방식
 */
/*
function run() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 1000);
}
 
run();
console.log('Done !!!');
*/

/*
function run(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {}
        const end = Date.now();
        console.log(end - start + 'ms');
        callback();
    }, 1000);
}
 
run(() => {
    console.log('Done !!!');
});

*/

let test = ()=>{
    console.log('Done !!!');
};

function run(call_back) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {}
        const end = Date.now();
        console.log(end - start + 'ms');
        call_back();
    }, 1000);
}
 
run(test);

