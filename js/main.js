function chooseYosemite(){
	console.log("Yosemite");

//change image to images/yosemite.jpg
	$("#main-container img").attr("src", "images/yosemite.jpg");
	
}

function chooseEverest(){
	console.log("Everest");
	$("#main-container img").attr("src", "images/everest.jpg");
}

function chooseSahara(){
	console.log("Sahara");
	$("#main-container img").attr("src", "images/sahara.jpg");
}


$("#yosemite").click(chooseYosemite);
$("#everest").click(chooseEverest);
$("#sahara").click(chooseSahara);


