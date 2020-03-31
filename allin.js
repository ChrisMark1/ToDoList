$(document).ready(function(data){





var width = $('.ticker-text').width(),
    containerwidth = $('#ticker-container').width(),
    left = containerwidth;
$(document).ready(function(e){
	function tick() {
        if(--left < -width){
            left = containerwidth;
        }
        $(".ticker-text").css("margin-left", left + "px");
        setTimeout(tick, 16);
      }
      tick();
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



	 var user = firebase.auth().currentUser;
var x=0;

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
    	var user = firebase.auth().currentUser;
        console.log('You entered successfully!');
		console.log("User " + user.uid + " is logged in with " + firebaseUser.provider);
	$('input[type="submit"]').removeAttr('disabled');
		$('#log1').show();
		
	var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    history.replaceState(state, null, document.URL);
		
}
 if(reloadCount==0){
	
	postID1 = ref.push( {
	uid : "",
	thoughts: ""
   
		});
	
	
}

ref.on('value',getData,errorData);




	
  
	
	ref1.on('value',getData1,errorData1);
	$('#but').attr('disabled','disabled');	
	$('#ticker-container').hide();
	var r=1;
	var k=0;
	var myArray = new Array();
 $(".addV").click(function(){
	 var value = $('#myInput').val(); 

	   		

	 
	 if(value){

   alert('You are successfully add your note: '+value);
   
   postID1 = ref.push( {
	uid : user.uid,
	thoughts: value
   
	 });
   myArray.push(value);

event.preventDefault();
var deleteButton = "<button class='delete btn btn-danger' id='"+k+"' >Delete</button>";
var editButton = "<button class='edit btn btn-success'  id='"+k+"' disabled>Edit</button>";
var twoButtons = "<div class='btn-group pull-right'>" + deleteButton + editButton + "</div>";
var NullLi = "<div class='checkbox'><label></label></div>";
$(".list_of_items").append("<li class='list-group-item'>" + "<div class='text_holder'>" + $("#myInput").val()  + twoButtons + "</div>" + NullLi + "</li>");
$("#myInput").val('');
k+=1;

	 }else{
		 alert('Null notes not permitted.Please correct your note!')
	 }


$(".list_of_items").on("click", "button.delete", function(e){
$(this).closest("li").remove();
var clickedID = this.id;
console.log(clickedID);
for(r=0;r<myArray.length;r++){
if(r==clickedID){
ref.orderByChild('thoughts').equalTo(myArray[r]).on("child_added", function (snapshot) {
  snapshot.ref.remove();
  alert('Your note delete successfully!');
});
}
}
return false;
});

  }); 
  

	
	} 
	

});	   
	
	   


function getData1(data){
	var k=0;
	 var user = firebase.auth().currentUser;
	console.log(data.val());
	 users = data.val();
	 keys = Object.keys(users);
	console.log(keys);
	
	var name;
	
	for(var i=0;i<keys.length;i++){
		 k = keys[i];
		  var user = firebase.auth().currentUser;
		 thoughts = users[k].thoughts;
		 name = users[k].name;
		 surname = users[k].surname;
		var uid1 = users[k].uid;
		if(uid1==user.uid){
	     $('#stats').show();
		$('#user-name').text(name);
		$('#user-name1').text(surname);
		console.log(thoughts,user.uid);
		}
	}
	
}

 function errorData1(err){
	console.log(err);
}




	   
	 
function getData(data){
	var k=0;
	if(data.val()!==null){
	 var user = firebase.auth().currentUser;
	console.log(data.val());
	 users = data.val();
	 keys = Object.keys(users);
	console.log(keys);
	if(x!=1){
	var myArray = new Array();
	for(r=0;r<keys.length;r++){
	var k = keys[r];
	
	var uid1 = users[k].uid;

	if(uid1==user.uid){	
	var thoughts = users[k].thoughts;
event.preventDefault();
 k+=1;
var deleteButton = "<button class='delete btn btn-danger' data-event='delete' id='"+k+"'  >Delete</button>";
var editButton = "<button class='edit btn btn-success' id='"+k+"' >Edit</button>";
var twoButtons = "<div class='btn-group pull-right'>" + deleteButton + editButton + "</div>";
var checkBox = "<div class='checkbox'><label></label></div>";
$(".list_of_items").append("<li class='list-group-item'>" + "<div class='text_holder'>" +thoughts  + twoButtons + "</div>" + checkBox + "</li>");

	}
	}
	

$(".list_of_items").on("click", "[data-event='delete']", function(e){
$(this).closest("li").remove();
 var clickedID=this.id;
clickedID=clickedID.slice(0, -1);
alert('You delete your note successfully!');	
var adaRef = firebase.database().ref('users/'+clickedID);
adaRef.once("value")
  .then(function(snapshot) {
  adaRef.remove();



});
});


	
$(".list_of_items").on("click", "button.edit", function (e){
var editItemBox = "<form class='edit_input_box' onsubmit='return false' ><input type='text' class='itembox'></form>";
var originalItem = $(this).parent().val();
var deleteButton = "<button class='delete btn btn-danger' data-event='delete' id='" +k+"' disabled>Delete</button>";
var editButton = "<button class='edit btn btn-success' id='" +k+"' disabled >Edit</button>";
var twoButtons = "<div class='btn-group pull-right'>" + deleteButton + editButton + "</div>";
$(this).closest("div.text_holder").replaceWith(editItemBox);
clickedID=this.id;
clickedID=clickedID.slice(0, -1);
alert('Please add your new node!');
$('input[type=text]').on('keydown', function(e) {
	 if (e.which == 13) {
       e.preventDefault();
		var kk = e.target.value;
		
		 var data = {
	thoughts: kk,	
	uid:user.uid
		 }
alert('You successfully add your new node!');	 
var updates = {};
  updates['users/'+clickedID] = data;
  $(this).replaceWith("<div>" + $(".itembox").val() + twoButtons + "</div>");
   firebase.database().ref().update(updates);
  
  
  	


  
	return false;	
	}	
});	
});


	

	x=1;
	
	
	
	



}	

k=0;

	}
  } 	   
	   
	   
	   
	   
	   
	   
	   
	   





   function errorData(err){
	console.log(err);
}
   
   


		
   

		
		
$('.log').on("click" , function(event){
  		if (confirm("Are you sure to logout?") == true) {
			firebase.auth().signOut().then(function(user) {
       console.log('Signed Out');
  alert('You are logout successfully!');  
}).catch(function(error) {
 console.error('Sign Out Error', error);
  });
 $('#stats').hide();
 $('#stats1').show();
 $('.log').hide();
  $('input[type="submit"]').attr('disabled','disabled');
  $( ".list_of_items" ).remove();
 $('#but').removeAttr('disabled','disabled');
 $('#ticker-container').show();
     } else {
    	  alert('You are staying Login');
     }
});	

		
		
		
		

    
		

		
		
		
		
		
		
		

	
	
	

	
	
	
	






































});



