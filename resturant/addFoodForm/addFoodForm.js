
var uid
function addFood()
{
  // var storage = firebase.storage();
  var itemName = document.getElementById("itemName").value;
  var itemPrice = document.getElementById("itemPrice").value;
  var category = document.getElementById("category").value;
  var delivery = document.getElementById("delivery").value;
  
  var storage = firebase.storage()
  
  firebase.auth().onAuthStateChanged((resturant) => {
    if (resturant) {
      uid = resturant.uid
      console.log(uid)

      var imageFile = document.getElementById("imageFile");
      var imageKey = imageFile.files[0];
      
      var imagesRef = storage.ref().child('images/' + imageKey.name);
      var uploadItem = imagesRef.put(imageKey);
  
      uploadItem.snapshot.ref.getDownloadURL()
      .then((url) => {
        firebase.firestore().collection("foodItem").add({
          itemName,
          itemPrice,
          category,
          delivery,
          imageUrl: url,
          resturantID: uid 
        })
        .then((res) => {
          console.log("success : " , res)
          swal({
            title: "Yohoo!!",
            text: "Food added successful",
            icon: "success",
          })
        })
        .catch((err)=>{
          var errorCode = err.code;
          var errorMessage = err.message;
          console.log("err : " , errorMessage)
          console.log("err : " , err)
          swal({
            title: "OOpss!!",
            text: "Food added unsuccessful",
            icon: "error",
          })
        })
      })
      .catch((err)=>{
        var errorCode = err.code;
          var errorMessage = err.message;
          console.log("err : " , errorMessage)
          console.log("err : " , err)
          swal({
            title: "OOpss!!",
            text: "Food added unsuccessful",
            icon: "error",
          })
      })
    }
     else {
      //...
    }
  });
  
}




function logout() {
  firebase.auth().signOut().then(() => {
      location.href = "/index.html"
  }).catch((error) => {
      // An error happened.
      return false
  });

}