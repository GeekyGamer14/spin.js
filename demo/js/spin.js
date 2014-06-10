function spin() {
	document.body.style.setProperty("-webkit-animation", "spin 3s linear infinite", null);
		var str = document.getElementById("replacetxt").innerHTML; 
    var res = str.replace("Enter spin(); into the console to run spin.js or click this button", "weeeeeeeeeeeeeeeeee");
	document.getElementById("replacetxt").innerHTML = res;
	    var elem = document.getElementById("removebtn");
elem.parentNode.removeChild(elem);
}