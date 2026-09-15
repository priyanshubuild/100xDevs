const fs=require("fs");

let commandslog=process.argv;
function main(fileName){
   fs.readFile(fileName,"utf-8",function(err,data){
         let count=wordCount(data);
         console.log(count+1);
   })
}
function wordCount(data){

    let Wcount=0;
    for(let i=0;i<data.length;i++){

        if(data[i]==" "){
            Wcount++;
        }

    }
    return Wcount;
    
};

main(commandslog[2]); 
