// approach #1( callback based,sync fn calls)
/*
const fs=require("fs");

let contents=fs.readFileSync("a.txt","utf-8");
const trimmedcontent= contents.trim();
fs.writeFileSync("a.txt",trimmedcontent);
console.log(fs.readFileSync("a.txt","utf-8"));


*/

// approch #2( callback based ,async fu calls)

/*
const fs=require("fs");

fs.readFile("a.txt","utf-8",function (err,data) {
    if (err){
        console.log(err);

    }
    else{
        fs.writeFile("a.txt",data.trim(),function(err,data){
            console.log("done writing!");

     fs.readFile("a.txt","utf-8",function (err,data){
       if(err){
        console.log(err);

       }
       else{ 
          console.log(data);
       }
        });

        });
    }
});

*/

// approch #3 (promisified async fn calls)
const fs=require("fs");
function clearFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,"utf-8",function(err,data){
            if(err){
                console.log("hi");
                reject();
                return;
            }
            else{
                fs.writeFile(filePath,data.trim(),function(err,data){
              if(err){
                    console.log("hi");
                    reject();
                   }
                    else{
                      resolve();
                    }
                
            });

            }
        })
    })
};


/* this is the normal .then .catch call
clearFile("a.txt")
.then(function(){
    console.log("file is cleaned")
})
.catch(function(){
    console.log("error while cleaning the file")
});

*/

// this is async await thing with try and catch ( handleing promised rejection)
/*


async function main(){
    try{
       await clearFile("a.txt");
        console.log("done cleaning the file");
    } catch(e){
        console.log("error while cleaning the file");
    }

}
main();

*/


//write a promisified function that takes a file prefix as an input (a)
// and cleans ({prefix}1.txt,{prefix}2.txt,{prefix}3.txt)


function cleanManyFiles(prefix){

    return new Promise( async function(resolve,reject){
        try{
           await clearFile(prefix+"1"+".txt");
           await clearFile(prefix+"2"+".txt");
           await clearFile(prefix+"3"+".txt");
           resolve();  
        }catch(e){
            console.log("error while cleanign the file");
            
        }
 


    })

}

cleanManyFiles("a")
.then(function(){
    console.log("done all 3 files cleaning the fiel");
})
.catch(function(){
    console.log("error while cleaning  the file");
})