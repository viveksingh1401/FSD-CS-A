function hello(user='Guest'){
    console.log(`Hello ${user}!`);
}
function sum(a=0,b=0){
    return a+b;

}
const add=(a=5,b=6)=>{a+b};
hello('ashish');
hello();
const z=sum();
console.log(add());

(function(){
    console.log("IIFE");
})();

function f1(user,callback){
    console.log(`Hello ${user}`);
    callback();
}
f1('admin',()=>{
    console.log(add(3,5));});
