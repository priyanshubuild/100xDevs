//create a promisified version of fs.readfile
//create a promisisei verison of settimeout 
//create an promisified versionof fs.writefile




// on the top of fs.readfile
const fs= require("fs");
function fsReadFilePromise(fileName, encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,encoding,function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
};

//how we call and promise
fsReadFilePromise("a.txt","utf-8")
.then(function(data){
    console.log(data);

}).catch(function(err){
    console.log(err);
})


//set timeout promisified


function setTimeoutPromisified(duration){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
           resolve()
            },duration);
        });
    
    
    };
setTimeoutPromisified(2000).then(function(){
    console.log("hey there 2 sec passed");
});