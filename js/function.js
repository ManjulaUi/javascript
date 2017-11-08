var x=2;
function s(){
    {let y=3;
    console.log(y);}
    let y=4;
    console.log(y);
}
s();
var a = 'global';
let b = 'global';
console.log(a); // "global"
console.log(b); // undefined
function test(){
    var foo = 33;
    if (true) {
       var foo = (foo + 55); // ReferenceError
       console.log(foo);
    }
 }
 test();
 console.log(foo);