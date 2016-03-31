
//naming function then passing it to set interval
setInterval(

	function(){
		++blur;
		}//end of function


	,1000)//end of setInterval
console.log(setInterval);


var elem = document.getElementById("body");
var blur = 0;
	console.log(blur);




var frame = function (event){
	if (blur > 30){
		blur = -5;
	} //end of if 
	else {
		blur++;
		document.getElementById('body').style.webkitFilter = 'blur(' + (blur/12) + 'px)';
	}//end of else

	console.log(frame);	
}//end of function


var id = setInterval(frame, 1000);
	console.log(id);





//-add the mouse over event

/*document.getElementById("body").onmousedown = function() {mouseDown()};

function mouseDown() {
    blur - (blur/12)++;
}

console.log(myFunction);*/




