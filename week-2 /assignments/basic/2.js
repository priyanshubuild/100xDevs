let a= [ "Apple","banana","apple","orange","banana","apple"];
let count={
    apple:0, 
    banana:0,
    orange:0
};

for(let i =0;i<a.length;i++){
    if(a[i].toLowerCase()=="apple"){
        count.apple++;
    }

    else if (a[i].toLowerCase()=="banana"){
        count.banana++;
    }
    else if (a[i].toLowerCase()=="orange"){
        count.orange++;
    }
}
console.log(count); 