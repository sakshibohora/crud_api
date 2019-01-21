$( document ).ready(function() {

	// SUBMIT FORM
    $("#form").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    function ajaxPost(){

    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val()
    	}

    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "http://localhost:8080/users",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
				$("#postResultDiv").html("<p>" +
					"Post Successfully! <br>" +
					"--> " + user.firstname + " " + user.lastname + "</p>");
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});

    	// Reset FormData after Posting
    	resetData();

    }

    function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
    }
})
