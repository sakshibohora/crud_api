
    function ajaxInsert(){

    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val()
    	}

    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "http://localhost:8081/users",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
				$("#resultdiv").html("<p>" +
					"Post Successfully! <br>" +
					"--> " + formData.firstname + " " + formData.lastname + "</p>");
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
function ajaxSearchAll(){
	$.ajax({
	type : "GET",
	url : "http://localhost:8081/users/",
	success: function(result){
	console.log(result);
	$('#resultdiv').empty();
	
	result.forEach(element => {
	$('#resultdiv').append(element._id + " " +element.firstname + " " + element.lastname + "<br>");	
	});	
	
	
	console.log("Success: ", result);
	},
	error : function(e) {
		$("#resultdiv").html("<strong>Error</strong>");
		console.log("ERROR: ", e);
	}
	});	
	}

	function ajaxSearch(){
		$.ajax({
			type : "GET",
			url : "http://localhost:8081/users/" + $('#fname').val(),
			success: function(result){
				console.log(result);
				$('#resultdiv').empty();
				$('#resultdiv').append( result._id + " "+ result.firstname + " " + result.lastname + "<br>");	
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#resultdiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
	
	function ajaxDelete(){
	// DO DELETE
	$.ajax({
		type : "DELETE",
		contentType : "application/json",
		url : "http://localhost:8081/users/"+ $('#fname').val(),
		dataType : 'json',
		complete: function(user) {
			$("#resultdiv").html("<p>" +
				"Deleted <br>" + "</p>");
		},
		error : function(e) {
			alert("Error!")
			console.log("ERROR: ", e);
		}
	});

}

function ajaxUpdate(){
	// DO PUT
	var formData = {
		firstname : $("#firstname").val(),
		lastname : $("#lastname").val(),
		userId :$("#userId").val()
		}

	$.ajax({
		type : "PUT",
		contentType : "application/json",
		url : "http://localhost:8081/users/"+ $('#fname').val(),
		dataType : 'json',
		data : JSON.stringify(formData),
		complete: function(user) {
			$("#resultdiv").html("<p>" +
				"Updated <br>" + "</p>");
		},
		error : function(e) {
			alert("Error!")
			console.log("ERROR: ", e);
		}
	});

}

