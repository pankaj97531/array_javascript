function someFunction(){}
console.log(new Date());
var arr= [];
for(var i=0;i<50000;i++){
	//console.log(Math.floor((Math.random()*100)));
	arr.push(Math.floor((Math.random()*1000)));
}

console.log(new Date());

var sortArr=[];

var flag = null;

for(var i=0;i<arr.length;i++){
	for(var j=i+1;j<arr.length;j++){
		if(arr[i] > arr[j] ){
			flag=arr[j];
		//	console.log(flag);
			//return false;
			arr[j] = arr[i];
			arr[i] = flag;
			
		}
	}
}
console.log(arr);
console.log(new Date());
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

console.log(new Date());