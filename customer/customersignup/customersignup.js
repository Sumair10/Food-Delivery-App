
function custumerSignup()
{
  var username = document.getElementById("username").value;
  var email = document.getElementById("userEmail").value;
  var userCountry = document.getElementById("userCountry").value;
  var userCity = document.getElementById("userCity").value;
  var userPhone = document.getElementById("userPhone").value;
  var password = document.getElementById("userpassword").value;


  firebase.auth().createUserWithEmailAndPassword(email, password)

  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("success : " , userCredential);

    user.updateProfile({
      displayName : username
    })
    
    // ...
    firebase.firestore().collection("users").doc(user.uid).set({
      username,
      email,
      userCountry,
      userCity,
      userPhone,
      userUID : user.uid
  }).then(()=>{
    swal({
      title: "Yohoo!!",
      text: "Signup successful",
      icon: "login  ",
    })
    .then((res)=>{
      location.href="/customer/customerlogin/customerlogin.html"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
  })
 
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  
    return false;
  })
   
  
  .then(()=>{
    console.log("profile updated")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error : " , error)
    swal({
      title: "OOpss!!",
      text: "Signup unsuccessful",
      icon: "error",
    })
  });

// add to firestore


 
}

