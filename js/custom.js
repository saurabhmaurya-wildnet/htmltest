
//STICKY HEADER

var headerBar = document.getElementById("header");
var headerContainer = document.getElementById("header__container");

var scrollPosY = document.body.scrollTop;

window.onscroll = function headerClass(){
	
	if(window.pageYOffset > 100){
		headerBar.classList.add("sticky--header");
		headerContainer.classList.add("sticky--header--container");
	}else{
		headerBar.classList.remove("sticky--header");
		headerContainer.classList.remove("sticky--header--container");
	}
	
}
