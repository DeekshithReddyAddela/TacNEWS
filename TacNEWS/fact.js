// JavaScript Document
function fact(){
	"use strict";
	var out='';
	var ur='http://mentalfloss.com/api/1.0/views/amazing_facts.json?id=';
	var ran=Math.floor(Math.random() * 1000);
	var url='';
	var xmlhttp = new XMLHttpRequest();
	url=ur+ran;
	xmlhttp.open("GET", url, true);
		xmlhttp.onreadystatechange = function() {
			//"use strict";
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				var myArr = JSON.parse(xmlhttp.response);
				array(myArr);
				//console.log(myArr[0].nid);
				console.log("inside");
		}
		};
		xmlhttp.send();
	function array(arr){
		out += '<div class="panel leftbar light-grey">';
		out += arr[0].nid;
		out += "</div>";
		document.getElementById("id02").innerHTML = out;
	}
	

}