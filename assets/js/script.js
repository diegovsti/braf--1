window.onload = function (){
	document.querySelector('.menu-mobile').addEventListener('click', function(){
		if(document.querySelector('.menu-container nav ul').style.display == 'block'){
			document.querySelector('.menu-container nav ul').style.display = 'none';
		}else {
			document.querySelector('.menu-container nav ul').style.display = 'block';
		}
	});
};