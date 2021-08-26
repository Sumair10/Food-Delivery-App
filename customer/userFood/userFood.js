var userUID = ''
var userUID1 = ''
 
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

    firebase.firestore().collection("foodItem").get()
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
                <div class="col-md-4">
                <!-- bbb_deals -->
                <div class="bbb_deals">
                    <div class="bbb_deals_slider_container">
                        <div class=" bbb_deals_item">
                            <div class="bbb_deals_image"><img src="${element.imageUrl}" alt=""></div>
                            <div class="bbb_deals_content">
                                <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div class="bbb_deals_item_category"><a href="#">${element.category}</a></div>
                                </div>
                                <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                    <div class="bbb_deals_item_name">${element.itemName}</div>
                                    <div class="bbb_deals_item_price ml-auto">Rs ${element.itemPrice}</div>
                                </div>
                                <div class="available">
                                    <div class="available_line d-flex flex-row justify-content-start">
                                        <div class="available_title">Delivery:  <span>${element.delivery}</span></div>
                                        <button class="btn" onclick="added()">Order Now</button> 
                                    </div>
                                    
                                    <div class="available_bar"><span style="width:17%"></span></div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
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
  


