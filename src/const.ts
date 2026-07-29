function test(){
   const x = 2;
    if(true){
        const x = 3;
    }
    console.log(x);
}
const x = 1;
test();


console.log(x);//output 2 1