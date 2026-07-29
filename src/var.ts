function test(){
  var x = 2;
    if(true){
        var x = 3;
    }
    console.log(x);
}
var x = 1;
test();


console.log(x);//output 3 1
