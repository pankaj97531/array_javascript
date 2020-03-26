function someFunction(){}
console.log('start------',new Date());
var arr= [6,7,8,4,2,3,4,76,89];
for(var i=0;i<5;i++){
	//console.log(Math.floor((Math.random()*100)));
	//arr.push(Math.floor((Math.random()*1000)));
}

console.log('push complete--------',new Date());

var sortArr=[];

var flag = null;
//selection sort
for(var j=0;j<arr.length;j++){
	var getIndex = null;
	var arrmax = null;
	var arrmin = null;
	if(sortArr.length===0){
		sortArr.push(arr[j])
	}else{
		if(sortArr.includes(arr[j])){
			getIndex = sortArr.indexOf(arr[j]);
			sortArr.splice(getIndex,0,arr[j]);
		}else{
			arrmax = Math.max(...sortArr);
			arrmin = Math.min(...sortArr);
			if(arr[j] < arrmin){
				sortArr.unshift(arr[j]);
			}else if(arr[j] > arrmax){
				sortArr.push(arr[j]);
			}else{
		//		sortArr.splice(getsortIndex((arr[j]),0,arr[j]));	
			}
		}
	}
}
function getsortIndex(elment){
	for(var a=0;a < sortArr.length;a++){
		if(elment < sortArr[a]){
			return a;
		}
	}
	
}

console.log("sort complete---------",new Date());
var obj_arr={};
var increment;
for(var k=0;k<arr.length;k++){	
	if(obj_arr.hasOwnProperty(obj_arr[arr[k]])){
		increment=increment+1;
	obj_arr[arr[k]] = 	increment;	
	}else{
		increment =1
		obj_arr[arr[k]] = 	increment;	
	}
}
console.dir(obj_arr);
console.log('object complete-------',new Date());