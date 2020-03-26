function someFunction(){}
console.log('start------',new Date());
var arr= [];
for(var i=0;i<50;i++){
	//console.log(Math.floor((Math.random()*100)));
	arr.push(Math.floor((Math.random()*1000)));
}

console.log('push complete--------',new Date());

var sortArr=[];

var flag = null;
//selection sort
var i=0;
while(arr.length>0){
	var minElement = Math.min(...arr);
	i = arr.indexOf(minElement)
	sortArr.push(minElement);
	arr.splice(i,1);
}
console.log(sortArr);
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