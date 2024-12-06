let min=0;
let max=100;
let a = [7,8,45,3,8,31,13];
a.forEach(myfunc);
function myfunc(value){
    if(value>min){
        min=value;
    }
    if(value<max){
        max=value;
    }
}
console.log("Minimum value is: "+min+"<br>");
console.log("Maximum value is: "+max+"<br>");