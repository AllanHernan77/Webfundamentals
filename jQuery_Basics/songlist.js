

$(document).ready(function(){
	$("#Button").click(function(){
    $("#song-list").append($("<li>", {
         text: $("#SongInput").val()
    }));
});
	

});

	$(document).ready(function(){

         $("#Button").on("click", function(){
         	var song= $("#SongInput").val();
         	console.log(song)

        	var listItem= "<li>" + song +"</li>";
        	console.log(listItem)

        	$("#song-list").append(listItem)
        	$("#SongInput").val("");
         });
               });

