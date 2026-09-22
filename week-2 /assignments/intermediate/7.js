let obj={ a: 1, b: 2, c: 3, d: 4 };
let size=2;
let arr=Object.entries(obj);
let result=[];

let index=0;
for (let i=0;i<size;i++){
    let temp=[];
    let j=0;
    while(j<size){
        temp.push(arr[index]);
        j++;
        index++;
    }
    result.push(temp);
}
console.log(result);