$( document ).ready(function() {

	// GET REQUEST
	$("#frm").submit(function(event){
	event.preventDefault();
	console.log('jarvis');
	ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
	$.ajax({
		type : "GET",
		url : "http://localhost:3030/userdata",
		success: function(result){
		$('#getResultDiv ul').empty();
		$.each(result, function(i, user){
		$('#getResultDiv .list-group').append(user.fname + " " + user.lname + "<br>")
		});
		console.log("Success: ", result);
		},
		error : function(e) {
		$("#getResultDiv").html("<strong>Error</strong>");
		console.log("ERROR: ", e);
		}
		});	
		}
	})