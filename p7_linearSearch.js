let a=[1,2,3,4,5,6];
let search=4;
for (let i in a) {
    if(a[i]==search){
        console.log("Element found at index: "+i);
        break;
    }
}