$(document).ready(function(){



$('#register1').click(function(){
	
	 
	$('#container2').show();
	 $('#container1').hide();
});




$('#login').click(function(){
	
	 $('#container2').hide();
	 $('#container1').show();
});
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnJGgtd1EZtQorZ85HY7lT5V_z2HMyls0",
    authDomain: "chris-8c42f.firebaseapp.com",
    databaseURL: "https://chris-8c42f.firebaseio.com",
    projectId: "chris-8c42f",
    storageBucket: "chris-8c42f.appspot.com",
    messagingSenderId: "606177490075"
  };
  firebase.initializeApp(config);
  console.log(firebase);
  
//Create firebase reference

var database = firebase.database();
var ref = database.ref('users');

var ref1 = database.ref('users-info');



$('.addValue').on("click" , function(event){
	event.preventDefault();
var pass1 = $('#password');
var name1 =$('#name');
var surname1 =$('#surname');
var date1=$('#date');
var username1 =$('#username');
var conf =$('#confirm');
var email1 =$('#email');
 


 
 
 
   

 if(name1!=null && username1.val()!=null && date1.val()!=null&& email1.val()!=null && surname1.val()!=null && pass1.val()!=null){

if(pass1.val()!=conf.val()){
	 alert('Please confirm your password correctly!')
	 
 } 
  else{
	  $('img').show();
}
var email = $('#email');    
var pass = $('#password');   
 if(email.val() && pass.val()){
    firebase.auth().createUserWithEmailAndPassword(email.val(),pass.val()).then(function(users){
        console.log('everything went fine');
        console.log('user object:' + users);
		alert('Everything Went Fine! User Name:    ' + name1.val() );
        //you can save the user data here.
		
		var data = {
	name:$('#name').val(),
	username:$('#username').val(),
	email:$('#email').val(),
	date:$('#date').val(),
	surname:$('#surname').val(),
    password:$('#password').val(),
	uid : users.uid
}
ref1.push(data);
window.location.href = 'todo.html';
    }).catch(function(error) {
        console.log('there was an error');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + ' - ' + errorMessage);
		alert(errorCode + ' - ' + errorMessage);
    });



} else {
	        alert('please fill all fields!');
            console.log('fill in both fields');
        }  
		
}else{
alert('Please complete all the form without null values!');
} 		
					
});




$('.addValue1').on("click" , function(event){
	event.preventDefault();
	
	var email = $('#email1');    
    var pass = $('#password1');   
	
	if(email.val() && pass.val()){
    firebase.auth().signInWithEmailAndPassword(email.val(),pass.val()).then(function(users){
        console.log('everything went fine');
        console.log('user object:' + users);
        //you can save the user data here.
		$('input[type="submit"]').removeAttr('disabled');
		$('#log1').show();
		alert('You login successfully!');
	   



		
    }).catch(function(error) {
        console.log('there was an error');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + ' - ' + errorMessage);
		alert(errorCode + ' - ' + errorMessage);
    });
   
    

} else {
            console.log('fill in both fields');
        }   
	   
	
	   
	   	   
	   


});


var user = firebase.auth().currentUser;



firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
		
        window.location.href = 'todo.html'
    }else if(window.location.href == 'login.html') {
       
    }
});
	
	
	   
	   
	   
	   
	   
	   
	   
});	   
	   
	   
	   
	   
	   

  










	
	
	















		
	
    



		
		
		
		
		
		

	
	
	

	
	
	
	










































