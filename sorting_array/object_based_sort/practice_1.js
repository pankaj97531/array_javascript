var inputArr=[];
var inputArr2=[];
for(let i=0;i<50000;i++){
    let rendomNo = Math.floor(Math.random()*1000+Math.random()*100);
    inputArr.push(rendomNo);
    inputArr2.push(rendomNo);
}
var outputObj = {};
console.log('start object based short ',window.performance.now());
for(let i=0;i<inputArr.length;i++){
    if(outputObj[inputArr[i]]==undefined){
        outputObj[inputArr[i]]=inputArr[i];
    }else{
        let count=1;
        //outputObj[inputArr[i]]={ [Symbol()] :inputArr[i]};
        //if(outputObj[inputArr[i]])
        if(outputObj[inputArr[i]][inputArr[i]]==undefined){
            outputObj[inputArr[i]]={ [inputArr[i]] : count};
        }else{
            outputObj[inputArr[i]] = { [inputArr[i]] : outputObj[inputArr[i]][inputArr[i]]+1};
        }

    }
}


let objectOutputArr = [];
for(let key in outputObj){
    if(typeof outputObj[key]=='object'){
        let getKeyArr = Object.keys(outputObj[key])[0];
        let countRepeatedNo = outputObj[key][getKeyArr];
        for(let i=0;i<=countRepeatedNo;i++){
            objectOutputArr.push(+key);            
        }
    }else{
        objectOutputArr.push(outputObj[key])
    }
}
console.log('stop object based short ',window.performance.now());
console.log(objectOutputArr);

// console.log('start slection short ',window.performance.now());
// let outputArr = [];
// while(inputArr2.length > 0){
//     let getMinElement = Math.min(...inputArr2);
//     outputArr.push(getMinElement);
//     let getIndex = inputArr2.indexOf(getMinElement);
//     inputArr2.splice(getIndex,1);
// }
// console.log('stop slection short  ',window.performance.now());
// console.log(outputArr);

console.log('start bubble short ',window.performance.now());
for(let i=0;i<inputArr2.length;i++){
    let flag;
    for(let j=i+1;j<inputArr2.length-1;j++){
        if(inputArr2[i]>inputArr2[j]){
            flag=inputArr2[j];
            inputArr2[j] = inputArr2[i];
            inputArr2[i] = flag;
        }
    }
}
console.log('stop bubble short  ',window.performance.now());
console.log(inputArr2);
//console.log(inputArr2);
