let fun = (a,b) =>{
	if(a > b){
		console.log("Число : " + a + "  больше чем число: " + b);
	}else if(a == b){
		console.log("Оба числа равны!!");
	}else{
		console.log("Число : " + b + "  больше чем число: " + a);
	}
};
fun();

let twoMass = (arr1, arr2) =>{
	console.log((arr1.length > arr2.length) ? ("First array is longer") : (arr1.length == arr2.length) ? ("Same length") : ("Second array is longer"));
};
twoMass([],[]);

let strLength = (str)=>{
	let count = 0;
	for (let letter in str){
		count += 1;
	}
	return count;
};
strLength();