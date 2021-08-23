

function resturantSignup()
{
  var resturantName = document.getElementById("resturantName").value;
  var email = document.getElementById("resturantEmail").value;
  var resturantCountry = document.getElementById("resturantCountry").value;
  var resturantCity = document.getElementById("resturantCity").value;
  var password = document.getElementById("resturantPassword").value;


  firebase.auth().createUserWithEmailAndPassword(email, password)

  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("success : " , userCredential);

    user.updateProfile({
      displayName : resturantName
    })
    
    // ...
    firebase.firestore().collection("resturant").doc(user.uid).set({
      resturantName,
      email,
      resturantCountry,
      resturantCity,
      userUID : user.uid
  }).then(()=>{
    swal({
      title: "Yohoo!!",
      text: "Resturant Signup successful",
      icon: "success",
    })
    .then((res)=>{
      location.href="/resturant/resturantlogin/resturantlogin.html"
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

