let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? 1
  }
  console.log(count); // What is logged? 0
})();

// /second q
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter()); 
// answer=1,2,3,4


// third q
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  } 
//   answer=3,3,3
// forth
function lenfun(width){
    function brfun(length){
        return length*width;
    }
    console.log (brfun(10));

 }
 console.log (lenfun(13))

//  fifth
// Print Output

var a = 12;
(function () {
  alert(a);
})(); 
// answer=12

// sixth
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// answer=12


// eight
var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    console.log("------------ Q8 --------------")
    console.log(
        "outerArg = " + outerArg + "\n" + //123
        "innerArg = " + innerArg + "\n" + //456
        "outerVar = " + outerVar + "\n" + //a
        "innerVar = " + innerVar + "\n" + //b
        "globalVar = " + globalVar); // xyz
    })(456);
})(123);
