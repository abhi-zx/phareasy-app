function runProgram(input) {
   var a = input.split("");
//    console.log(a)
var obj ={}
for(var i = 0; i < a.length; i++){

    var char = a[i];
    if(obj[char]){
        obj[char]++
    }
    else
    obj[char]=1;
}
    var max=0,count=0;
for(key in obj){
    if(obj[key]>count){
        count=obj[key];
    }
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
for(key in obj){
    if(obj[key]==count)
    { var c = getKeyByValue(obj,count)
        console.log(c);
        
    }
    }
}


  if (process.env.USERNAME === "Abhi") {
    runProgram(`apple`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  