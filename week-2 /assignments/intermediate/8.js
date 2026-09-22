let obj={
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
};

let key=Object.keys(obj);
let resultf={};
let kexz=Object.keys(obj[key[0]]);
for (let j=0;j<key.length-1;j++){
    let tempoutput={};

    for(let i=0;i<key.length;i++){
        
        let kezz=Object.keys(obj[key[i]]);
    let name=obj[key[i]];
    if(name[kezz[j]]!=undefined){

        tempoutput[key[i]]=name[kezz[j]];
    }
}

    
    resultf[kexz[j]]=tempoutput;


    
}
console.log(resultf);