// Code Belongs to the SignUp HTML Page
$("#sign").click(function(){
	var fnup = $("#firstnameup").val();
	var lnup = $("#lastnameup").val();
	var eup = $("#emailup").val();
	var pup = $("#passwordup").val();
	
	
	$.get( "http://10.0.3.2/ProjectServer/signup.php", { firstnameup : fnup, lastnameup : lnup, emailup : eup, passwordup : pup } )
		.done(function( data ) {
			var returnValue = data;
			
			if( returnValue.match("success") )
			{
				window.location.replace("signin.html");
			}
			else
			{
				alert("Database Error");
			}
		});	
});

$("#clr").click(function() {

	$("#firstnameup").val("");
	$("#lastnameup").val("");
	$("#emailup").val("");
	$("#passwordup").val("");

});
// End of Code Belonging to SignUp HTML Page

//-------------------------------------------//

// Code Belongs to the SignIn HTML Page

$("#goback").click(function() {
	window.location.replace("index.html");
});

$("#signin").click(function() {

var email = $("#email_inup").val();
var password = $("#password_inup").val();

$.get( "http://10.0.3.2/ProjectServer/signin.php", { email_inup : email, password_inup : password } )
		.done(function( data ) {
			var returnValue = data;
			
			if( returnValue.match("success") )
			{
				window.location.replace("main.html");
			}
			else
			{
				alert("Invalid Username or Password");
			}
		});	

});

// End of Code Belonging to SignIn HTML Page