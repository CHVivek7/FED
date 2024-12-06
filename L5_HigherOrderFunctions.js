let a=[7,3,8,31,18,33];

let b=a.map((x)=>{return x*x});
console.log("Square of numbers using map()="+b);

let c=a.filter((x)=>{return x%2==0});
console.log("Even numbers from array using filter()="+c);

let d=a.reduce((sum,i)=>{return sum+i});
console.log("sum of numbers from array using reduce()="+d);