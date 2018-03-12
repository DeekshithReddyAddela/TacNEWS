function api(name){
"use strict";

var goo=' https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=27be7f995bbe468c97192445f630fc79';
var cnbc='https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=27be7f995bbe468c97192445f630fc79';
var url='';
var type='';
if(name === 'cnn'){
	url=cnn;
	type='General';}
else if(name === 'tv'){
	url=tv;
	type='Tech';}
else if(name === 'th'){
	url=th;
	type='General';}
else if(name === 'espn'){
	url=espn;
	type='Sport';}
else if(name === 'ew'){
	url=ew;
	type='Entertainment';}
else if(name === 'cnbc'){
	url=cnbc;
	type='Business';}
else if(name === 'goo'){
	url=goo;
	type='General';}

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.onreadystatechange = function() {
		//"use strict";
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			var myArr = JSON.parse(xmlhttp.response);
			myFunction(myArr);
			console.log("inside");
	}
	};

	xmlhttp.send();

	function myFunction(arr) {
		//"use strict";
		var out = " ";
		var i=0;
		out = '<div class="col-md-6 jasgrid">';
		var imgurl='';
		var des='';
		var title='';
		var newsurl='';
		for( i = 0; i < arr.articles.length/2; i++){
			imgurl=arr.articles[i].urlToImage;
			//var des=arr.articles[i].description;
			title=arr.articles[i].title;
			newsurl=arr.articles[i].url;
			
			out += '<div class="box-item" ><a href="'+newsurl+'" target="_blank"><div class="box-post"><span class="label label-success" rel="tag">'+type+'</span> <h1 class="post-title">'+title+'</h1></div><img src="'+imgurl+'" class="" alt="news"></a></div>';
		}
		out += '</div><div class="col-md-6 jasgrid">';
		for(; i < arr.articles.length; i++){
			imgurl=arr.articles[i].urlToImage;
			des=arr.articles[i].description;
			title=arr.articles[i].title;
			newsurl=arr.articles[i].url;
			
			out += '<div class="box-item"><a href="'+newsurl+'" target="_blank"><div class="box-post"><span class="label label-success" rel="tag">'+type+'</span> <h1 class="post-title">'+title+'</h1></div><img src="'+imgurl+'" class=""  alt="news"></a></div>';
		}
		out += '</div>';
		document.getElementById("id01").innerHTML = out;
	}
}
