let resturantEmail = document.getElementById("resturantEmail");
let resturantPassword = document.getElementById("resturantPassword");


function signin()
{
    
    window.onbeforeunload = null;
    firebase.auth().signInWithEmailAndPassword(resturantEmail.value, resturantPassword.value)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("success : " , user)
        
    }).then((res) => {
        swal({
          title: "Good job!",
          text: "Resturant Signin Successful",
          icon: "success",
        })
        .then((res)=>{
          window.location="/resturant/resturantDashboard/resturantDashboard.html";
        })
      })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error : " , errorMessage)
        swal({
          title: "OOpss!!",
          text: "Resturant Signup unsuccessful",
          icon: "error",
        })
    });
}