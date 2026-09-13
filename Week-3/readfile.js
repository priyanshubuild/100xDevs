const fs=require("fs");

let contexts = fs.readFileSync("a.txt", "utf-8");
console.log(contexts);

let result=0;
for (let i = 0; i < 100; i++) {
    result+=i;
}
console.log(result);



fs.readFile("a.txt", "utf-8",function(err,data){
    if(err){
        console.log("error while reading the file");

    }else{
        console.log(data);
    }
});

for (let i = 0; i < 100; i++) {
    result+=i;
}
console.log(result);
