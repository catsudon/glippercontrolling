var firebaseConfig = {
   apiKey: "AIzaSyCw_49PBNi0lThadQlq8XRwykkOPqrx4u4",
   authDomain: "buranakarn-8b093.firebaseapp.com",
   databaseURL: "https://buranakarn-8b093.firebaseio.com",
   projectId: "buranakarn-8b093",
   storageBucket: "buranakarn-8b093.appspot.com",
   messagingSenderId: "836043587292",
   appId: "1:836043587292:web:1dd49026cac93aeb64fe19",
   measurementId: "G-2FTBDM8YCB"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

var angle = firebase.database().ref('height');
var clamp = firebase.database().ref('clamp');

var mum = 0;
angle.once("value").then(function(dataSnapshot){
  mum = dataSnapshot.val();
  console.log(mum);
})


$('.angle').click(function(){
  if(mum >= 180){
    alert("ไม่สามารถยกได้สูงกว่านี้แล้ว")
  }
  else{
    mum = mum + 20;
    angle.set(mum);
  }

})


$('.angle-down').click(function(){
  if(mum <=0){
    alert("ไม่สามารถยกได้ต่ำกว่านี้แล้ว")
  }
  else{
    mum = mum - 20;
    angle.set(mum);
  }
})

$('.clamp-true').click(function(){
  clamp.set(true)
})
$('clamp-false').click(function(){
  clamp.set(false);
})
