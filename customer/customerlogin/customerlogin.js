let email = document.getElementById("email");
let password = document.getElementById("password");


function signin()
{
    
    window.onbeforeunload = null;
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("success : " , user)
        
        
    })
    swal({
        title: "Yohoo!!",
        text: "User login successful",
        icon: "success",
      })
    .then((ok)=>{
        window.location = "/customer/customerDashboard/customerDashboard.html";
    })

    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error : " , errorMessage)
        swal({
            title: "OOpss!!",
            text: "User login unsuccessful",
            icon: "error",
          })
    });
}