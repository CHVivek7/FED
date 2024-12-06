var c=0;
function count(){
   c=c+1;
   postMessage(c);
   setTimeout(count,1000);
}
count();