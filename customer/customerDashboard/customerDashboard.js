var cardArray = []
var cardArray1 = []
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
                                    <div class="box " id="box">
                                    
                                    <img class="rounded-circle" src="/images/aaaaa.jpeg" width="150px" height="150px" >
                                        <h3 class="name resturantName">${element.resturantName}</h3>
                                        <h4 class="name ">${element.resturantCountry}</h4>
                                        <p class="title">${element.resturantCity}</p>
                                        <p class="title">Email : ${element.email}</p>
                                        <a href = #about-section> <button  class="btn" id="button" onclick="openMenu('${element.userUID}' , '${element.resturantName}')">Open Menu</button></a>
                                       
                                    </div>
                                </div>

            `;
            })
            // myFunction()
        
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


// function myFunction() {
//     var resturantName = document.getElementsByClassName("resturantName");
  
//     for (var i = 0, len = resturantName.length; i < len; i++) {
//         resturantName[i]
//     }
//   }
 
    
function openMenu(id , resNamess)
{
   
   console.log(id)
   console.log(cardArray)


    document.getElementById("resNames").innerHTML=''
  
    firebase.firestore().collection("foodItem").where("resturantID" , "==" ,id).get()
        .then((querySnapshot) => {
            cardArray1 = []
            document.getElementById("resNames").innerHTML += `

            <p class=" span1">${resNamess}</p>

        `;

            querySnapshot.forEach(doc => {
                // console.log();
                // var a = doc.data()
                cardArray1.push(doc.data())
                // document.getElementById.innerHTML = "";
                // document.getElementById("disPlayCard").innerHTML = "";
                
            });
            console.log(cardArray1)
            
           
            // querySnapshot.forEach(doc => {
                // console.log(doc.data())
                // resName.push(doc.data().resturantName) 
                // console.log(doc.data().itemName)
                document.getElementById("displayCard1").innerHTML = '';
                cardArray1.forEach(function(element, index) {
                    

                    document.getElementById("displayCard1").innerHTML += `
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
                                                </div>
                                                <div class="available_bar"><span style="width:17%"></span></div>
                                            </div>
                                            <button class="btn justify-content-right" id="button" onclick="order()">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `;
    
                })
        })
        .catch((err)=>{
            console.log(err)
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

