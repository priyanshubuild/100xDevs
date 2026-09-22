let arr={ a: "apple", b: "banana", c: "kiwi" };
let keys=Object.keys(arr);
let maxx=arr[keys[0]];
for(let i=0;i<keys.length;i++){
    if(maxx.length<arr[keys[i]].length){
        maxx=arr[keys[i]];
    }
}
console.log(maxx);