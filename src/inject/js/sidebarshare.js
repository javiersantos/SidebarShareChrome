$(document).ready(function() {

var currentURL = window.location;
var currentTitle = window.document.title;

	
	// ["Label" , "website link" , "bar color" , "bar image"]
	var social = [
	 //["aim", 		"http://www.aim.com/", 		"#ffd900", chrome.extension.getURL("src/inject/images/aim.png")],
	 //["behance", 	"http://www.behance.net/", 	"#1769ff", chrome.extension.getURL("src/inject/images/behance.png")],
	 ["digg", 		"http://www.digg.com/submit?url=" + currentURL, "#2e9fff", chrome.extension.getURL("src/inject/images/digg.png")],
	 //["dribbble", 	"http://dribbble.com/", 	"#8aba56", chrome.extension.getURL("src/inject/images/dribbble.png")],
	 //["ember", 		"#", 						"#3fc380", chrome.extension.getURL("src/inject/images/ember.png")],
	 ["evernote", 	"http://www.addtoany.com/add_to/evernote?linkurl=" + currentURL + "&linkname=" + currentTitle, "#5ba525", chrome.extension.getURL("src/inject/images/evernote.png")],
	 ["facebook", 	"https://www.facebook.com/sharer/sharer.php?u=" + currentURL, "#3B5998", chrome.extension.getURL("src/inject/images/facebook.png")],
	 ["flickr", 	"https://www.flickr.com/", 	"#0063dc", chrome.extension.getURL("src/inject/images/flickr.png")],
	 ["forrst", 	"http://forrst.com/", 		"#5b9a68", chrome.extension.getURL("src/inject/images/forrst.png")],
	 ["google+", 	"https://plus.google.com/share?url" + currentURL, "#dd4b39", chrome.extension.getURL("src/inject/images/google_plus.png")],
	 ["github", 	"http://github.com", 		"#171515", chrome.extension.getURL("src/inject/images/github.png")],
	 ["last-fm", 	"http://www.last.fm/",  	"#c3000d", chrome.extension.getURL("src/inject/images/last-fm.png")],
	 ["linkedin", 	"https://www.linkedin.com/shareArticle?mini=true&url" + currentURL + "&title=" + currentTitle, "#0e76a8", chrome.extension.getURL("src/inject/images/linkedin.png")],
	 ["paypal", 	"https://www.paypal.com", 	"#1e477a", chrome.extension.getURL("src/inject/images/paypal.png")],
	 ["rss", 		"http://postrss.com/", 		"#ee802f", chrome.extension.getURL("src/inject/images/rss.png")],
	 ["sharethis", 	"http://www.sharethis.com/","#96bf48", chrome.extension.getURL("src/inject/images/sharethis.png")],
	 ["skype", 		"http://www.skype.com", 	"#00aff0", chrome.extension.getURL("src/inject/images/skype.png")],
	 ["tumblr", 	"https://www.tumblr.com/", 	"#34526f", chrome.extension.getURL("src/inject/images/tumblr.png")],
	 ["twitter", 	"https://twitter.com/home?status=" + currentTitle + " - " + currentURL, "#55acee", chrome.extension.getURL("src/inject/images/twitter.png")],
	 ["vimeo", 		"https://vimeo.com/", 		"#44bbff", chrome.extension.getURL("src/inject/images/vimeo.png")],
	 ["wordpress", 	"http://wordpress.com#", 	"#d54e21", chrome.extension.getURL("src/inject/images/wordpress.png")],
	 ["yahoo", 		"https://www.yahoo.com/", 	"#720e9e", chrome.extension.getURL("src/inject/images/yahoo.png")],
	 ["youtube", 	"http://youtube.com", 		"#c4302b", chrome.extension.getURL("src/inject/images/youtube.png)")],
	 ["zerply", 	"http://zerply.com/", 		"#9dcc7a", chrome.extension.getURL("src/inject/images/zerply.png")]
	 ];

////////////////////////////////////////////////	
//// DO NOT EDIT ANYTHING BELOW THIS LINE! /////
////////////////////////////////////////////////
		
	$("#socialside").append('<ul class="mainul"></ul>');
	
	/// generating bars
	for(var i=0;i<social.length;i++){
	$(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
						'<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
	 				}
	
	/// bar click event
	$(".scli").click(function(){
		var link = $(this).text();		
		for(var i=0;i<social.length;i++){
			if(social[i][0] == link){
				window.open(social[i][1], "_blank", "width=500, height=300");
			}
		}		
	});
	
	/// mouse hover event
	$(".scli").mouseenter(function() {	
		$(this).stop(true);	
		$(this).clearQueue();
			$(this).animate({
				left : "140px"
			}, 300);
				
	});

	/// mouse out event
	$(".scli").mouseleave(function(){
		$(this).animate({
			left:"0px"
		},700,'easeOutBounce');
	});

});
