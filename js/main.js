var array=[
    {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wwwppddf14kfc41fswtf",
     price:175,
    name:"Chennai Briyani",
    rating:4.1,
    id:1,
    quantity:1,
    delivery:37,
    place:"chennai"},


    {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7d93ecf49daaec4a521b5d19b59560b9",
    price:65,
   name:"chicken gravy",
   rating:4.4,
   id:2,
   quantity:1,
   delivery:41,
   place:"T Nagar"},

   {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3bcb581ee396fe770549dcbd235a780c",
   price:295,
  name:"Hyderabad Briyani",
  rating:4.7,
  id:3,
  quantity:1,
  delivery:26,
  place:"Royapettah"},

  {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oodghmivnc6bxnbrvzzw",
  price:95,
 name:"Veg Meals",
 rating:3.8,
 id:4,
 quantity:1,
 delivery:45,
 place:"Egmore"},

 {img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zoachfajoadabr1fldng",
 price:15,
name:"Parrotta",
rating:5,
id:5,
quantity:1,
delivery:50,
place:"Poongavanapuram"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/niatlu1dsi7al7z9dvyz",
price:145,
name:"Chettinad chicken Gravy",
rating:3.5,
id:6,
quantity:1,
delivery:60,
place:"Park Town"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/srgkvzgrhtk7lyotwk0a",
price:45,
name:"Veg Dosa",
rating:4.2,
id:7,
quantity:1,
delivery:25,
place:"Periyamant"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o9qlcyhbb4uax38vp9u1",
price:35,
name:" Fruit Juice ",
rating:3.4,
id:8,
quantity:1,
delivery:15,
place:"Egmore"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r8xxrxx0ef6iryynw9xl",
price:235,
name:"Chicken Manjurian",
rating:4.5,
id:9,
quantity:1,
delivery:55,
place:"Purasaivakkam"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/odgnymnp4dfu0rz1lmpo",
price:465,
name:"Grilled Chicken",
rating:4.1,
id:10,
quantity:1,
delivery:58,
place:"Triplicane"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ufryw0c5fuxraq1zx1pq",
price:45,
name:"Fruit Shop juice",
rating:4.2,
id:11,
quantity:1,
delivery:32,
place:"Egmore"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eoofgqycfn2scaa9dr4w",
price:320,
name:"Chicken Thandhoori",
rating:5.1,
id:12,
quantity:1,
delivery:23,
place:"Egmore"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/afd5jcvptfydzk7ygma2",
price:55,
name:"Bharathi Mess",
rating:4.5,
id:13,
quantity:1,
delivery:22,
place:"Chepauk"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cc1a38e16607fa995323edc1a491dd04",
price:23,
name:"Dosa Factory",
rating:3.8,
id:14,
quantity:1,
delivery:34,
place:"Royapettah"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f3c18a4a64682e16c9b679adcedb18c7",
price:199,
name:"Shero Foods",
rating:4.3,
id:15,
quantity:1,
delivery:34,
place:"Purasaivakkam"},

{img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ny8kj6b4mltw140wil1l",
price:256,
name:"Salem RR briyani",
rating:3.9,
id:15,
quantity:1,
delivery:44,
place:"Triplicane"},
]
var navc=document.getElementById("navc");
var navli=document.getElementById("navli")
var card=document.getElementById("card1")
var ordercard=document.getElementById("ordercard")
var cardcount=document.getElementById("cardcount")
var cardcountt=document.getElementById("cardcountt")
var cartsec=document.getElementById("cartsec")
var header=document.getElementById("header")




	 navc.addEventListener("click",()=>{
	 
	 
	     navli.classList.toggle("d-none");
	 
	 })

    //  window.addEventListener("click",()=>{
	//      navli.classList.toggle("d-none");
    //  })


     function sathesh(){
         navli.classList.toggle("d-none");
        
     }
     

function showcard(a) {
       a.map((a,b)=>{
         return(
            card.innerHTML+=`
            <div class="col-sm-12 col-md-6 col-lg-3">

                    <div class="my-3 procard">
                        
                            <div class="img">
                            <img src="${a.img}" class="w-100" style="height:200px">
                            </div>

                            <div class="name">
                                <p class="fw-bold">${a.name}</p>
                            </div>

                            <div class="price">
                                <p class="fw-bold">Start from ${a.price}</p>
                            </div>

                                <div class="d-flex justify-content-between align-items-center del">
                                   <div class="rating d-flex justify-content-between align-items-center">
                                     <i class="bi bi-star-fill"></i>
                                     <span>${a.rating}</span>
                                   </div>
                                    
                                    <span>${a.delivery}mins</span>
                                </div>
                            <div class="place">
                                <p>${a.place}</p>
                            </div>

                            <div class="viewcard text-center">
                                    <button type="submit" onClick="order(${a.id})">addtocart</button>
                            </div>
                        
                    </div>
            </div>
     `
         )
       })
}
showcard(array)

function fast() {
    array.sort((a,b)=>a.delivery-b.delivery)
    card.innerHTML=""
    showcard(array)
}

function low() {
    array.sort((a,b)=>a.price-b.price)
    card.innerHTML=""
    showcard(array)
}

function high() {
    array.sort((a,b)=>b.price-a.price)
    card.innerHTML=""
    showcard(array)
}

function rate() {
    array.sort((a,b)=>a.rating-b.rating)
    card.innerHTML=""
    showcard(array)
}

function off() {
    array.sort((a,b)=>b.rating-a.rating)
    card.innerHTML=""
    showcard(array)
}




var cart=[];

//add to cart
function order(id){
    if(cart.some((item)=>item.id === id)){
       
        alert("products already in cart")
       
    }
    else{
        
        const item=array.find((product)=>product.id === id);
        cart.push(item);
        console.log(cart)
        gocart()

    }

    if (cart.length <= 0){
        cardcount.innerHTML=""
        cardcountt.innerHTML=""
    }
    
    else{
        ordercard.innerHTML=""
        cardcount.innerHTML=cart.length
        cardcount.setAttribute("class","bg-warning px-2 rounded-circle text-light cardcount")
        cardcountt.innerHTML=cart.length
        cardcountt.setAttribute("class","bg-warning px-2 rounded-circle text-light cardcount")
        gocart()
    }

console.log(cart.length)
}

function seecart(){
    ordercard.innerHTML=""
    cartsec.classList.toggle("cartspace");
    cartsec.classList.toggle("cartspace2");
    gocart()
}

function gocart(){
    
  if (cart.length==0){
    ordercard.innerHTML+=`
        <div class="empty">
            <div class="container">
                <div class="col-12">
                    <div class="error-circle">
                        <i class="bi bi-exclamation-circle-fill"></i>
                    </div>

                    <div class="err-msg">
                        <h1>Oops</h1>
                        <h6>There is no products in your cart</h6>
                    </div>
                </div>
            </div>
        </div>
    `
  }
  else{
    cart.map((a,b)=>{
        return(
            ordercard.innerHTML+=`
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="col-lg-4">
                        <div class="cartimg">
                            <img src=${a.img}/>
                        </div>
                        </div>

                        <div class="col-lg-8">
                            <div class="cartname">
                                <h5>${a.name}</h5>
                            </div>

                            <div class="cartprice">
                                <h6> Price:${a.price * a.quantity}</h6>
                            </div>

                            <div class="quantity d-flex justify-content-start align-items-center">
                                <div class="plus">
                                    <i class="bi bi-plus" onClick="increament(${a.id})"></i>
                                </div>
                                <div class="proquan">
                                    <p>${a.quantity}</p>
                                </div>
                                <div class="minus">
                                     <i class="bi bi-dash" onClick="decreament(${a.id},${a.quantity})"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            `
        )
    })
  }
}  
    



function increament(i){
    ordercard.innerHTML=""
   cart=cart.map((a,b)=>{
        return a.id===i ? {...a,quantity:a.quantity+1}:a
    })
  gocart()

}

function decreament(x,y){
    ordercard.innerHTML=""
    
   if (y===1){
    cart=cart.filter((a,b)=>{
        return a.id!==x ? a:""
    })
    console.log(cart)
   }
   else{
    cart=cart.map((a,b)=>{
        return a.id===x ? {...a,quantity:a.quantity-1}:a
    })
    console.log(cart)
   }
 gocart()
 }


