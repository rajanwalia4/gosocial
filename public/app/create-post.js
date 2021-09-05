$("#submitButton").click(function (e) { 
	e.preventDefault();
	
	createPost();
});

function createPost(){
	var title = $("input[name='title']").val();
	var body = $("input[name='body']").val();
	var userId = 5;
	console.log(title,body)
	$.post("/api/posts", {title,body,userId},
		function (data, textStatus, jqXHR) {
			console.log(data,textStatus,jqXHR);
			alert("post created");
			$("input[name='body']").val("");
			$("input[name='title']").val("");
			$("#submitButton").unbind("click");
		},
		"json"
	);
	
	
	
// 	// Attach a submit handler to the form
// $( "#createPost" ).submit(function( event ) {
 
// 	// Stop form from submitting normally
// 	event.preventDefault();
  
// 	// Get some values from elements on the page:
// 	var $form = $( this ),
// 	  title = $form.find( "input[name='title']" ).val(),
// 	  body = $form.find("input[name='body']").val(),
// 	//   url = $form.attr( "action" );
// 		url = '/api/posts';
// 	// Send the data using post
// 	var posting = $.post( url, { title:title,body:body,userId:4 } );
  
// 	// Put the results in a div
// 	posting.done(function( data ) {
// 	  var content = $( data ).find( "#content" );
// 	  $( "#result" ).empty().append( content );
// 	});
//  });

}

