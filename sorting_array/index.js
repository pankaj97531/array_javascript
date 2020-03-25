var arr= [4,5,6,7,4,3,25,8,9];

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