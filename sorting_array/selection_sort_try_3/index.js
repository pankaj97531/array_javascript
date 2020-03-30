function someFunction(){}
console.log('start------',new Date());
var arr= [];
for(var i=0;i<50;i++){
	//console.log(Math.floor((Math.random()*100)));
	arr.push(Math.floor((Math.random()*1000)));
}
var maxElement = Math.max(...arr);
console.log('push complete--------',new Date());

var sortArr=[];

var flag = null;
//selection sort
var i=0;
for(var x=0;x<arr.length;x++){
		var minArr= [];
	if(x > 0){
		minArr=arr.slice(x);
	}else{
		minArr = arr;
	}

	var minElement = Math.min(...minArr);
	
	i = arr.indexOf(minElement);
	
	//sortArr.push(minElement);
	arr.unshift(minElement);
	arr.splice((i+1),1);
}
console.log(arr);
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