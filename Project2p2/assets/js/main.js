$(".where").hover(function(){
    // $(this).attr('data-img') == 'azotea' or 'nivel8'
    // so we end up with $('#azotea').show(), for example.
    $('#' + $(this).attr('data-img')).show();
}, function () {
  $('#' + $(this).attr('data-img')).hide();
});









































// $('#bobst').hide();

// //When the Image is hovered upon, show the hidden div using Mouseover
// $('.where').mouseover(function() {
// $('#bobst').show();
// });

// //When the Image is hovered away from, hide the div using Mouseout
// $('.where').mouseout(function() {
// $('#bobst').hide();
// });























// window.onlaod = function (){

// 	var bobst = document.getElementById("bobst");
// 		where = document.getElementById("where");

// 	where.onmouseover = function(){
// 		bobst.style.display = "block";
// 	}

// 	where.onmouseout = function(){
// 		bobst.style.display = "none";
// 	}

// };




// where.onmouseover = function(){
// 	bobst.style.display = "block";
// }

// where.onmouseout = function(){
// 	bobst.style.display = "none";
// }


// where.onclick = function(){
// 	        if (bobst.style.display == "none"){
// 	        	bobst.style.display = "block";
// 	        }
// 	        else {
// 	        	bobst.style.display = "none";
// 	        }
// 	}