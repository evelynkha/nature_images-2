
function changeImage(event){
	console.log(event.target)
	var imageURL = $(event.target).attr("src");
	$("#main-container img").attr("src", imageURL);
	
}






$("#yosemite").click(changeImage);
$("#everest").click(changeImage);
$("#sahara").click(changeImage);