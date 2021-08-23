var cardArray = []
function next() {
    location.href="/customer/userFood/userFood.html"
}
let getCard = () => {
    cardArray = []

    
    firebase.firestore().collection("resturant").get()
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
                                    <div class="box ">
                                        <h3 class="name ">${element.resturantName}</h3>
                                        <h4 class="name ">${element.resturantCountry}</h4>
                                        <p class="title">${element.resturantCity}</p>
                                        <p class="title">Email : ${element.email}</p>
                                        <button class="btn" id="button" onclick="next()">Open</button>
                                    </div>
                                </div>

            `;

            
            })
            
            

        })
        
}

var userUID = ''
 
function OnInit() {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user)
            userUID = user.uid;
            userName = user.displayName;
            userName = document.getElementById("resname").innerHTML = user.displayName;

            console.log(userName)
            // ...
        } else {

        }
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

