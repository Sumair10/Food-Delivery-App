var userUID = ''
 
function OnInit() {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user)
            userUID = user.uid;
            userName = user.displayName;
            userName = document.getElementById("resname").innerHTML = user.displayName;

            console.log(userName)
            getCard()
            // ...
        } else {

        }
    })
}



var cardArray = []

let getCard = () => {
    cardArray = []

    firebase.firestore().collection("foodItem").where("resturantID", "==", userUID).get()
        .then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                // console.log();
                // var a = doc.data()
                cardArray.push(doc.data())
                // document.getElementById.innerHTML = "";
                // document.getElementById("disPlayCard").innerHTML = "";
            });
            console.log(cardArray);
            cardArray.forEach(function(element, index) {
                document.getElementById("displayCard").innerHTML += `

                <div class="col-md-6 col-lg-4 item">
                                    <div class="box "><img class="" src="${element.imageUrl}" width="100%" height="100% " >
                                        <h3 class="name ">${element.itemName}</h3>
                                        <h4 class="name ">Rs ${element.itemPrice}</h4>
                                        <p class="title">${element.category}</p>
                                        <p class="title">Delivery : ${element.delivery}</p>
                                        
                                    </div>
                                </div>
    

            `;

            })

        })
}


    function logout() {
        firebase.auth().signOut().then(() => {
            location.href = "/index.html"
        }).catch((error) => {
            // An error happened.
            return false
        });

    }
  





    ////////////////////////////////////////////

    