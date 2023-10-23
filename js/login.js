var loginform=document.getElementById("loginform")
let checkdetails=JSON.parse(localStorage.getItem("userdetails"));


loginform.addEventListener("submit",function(e1){
    e1.preventDefault();
    
    
    console.log(checkdetails)

check()
})

function check(){
    var lusername=document.getElementById("lusername").value
    var lpassword=document.getElementById("lpassword").value
    checkdetails.filter((a,b)=>{
        return a.name===lusername && a.pass===lpassword ? location.href="home-index.html":alert("wrongpass")
    })
    console.log(lusername,lpassword)

}



function showpass(){
    console.log(lusername.value)
    if (lpassword.type==="password"){
        lpassword.type="text"

    
    }
    else{
        lpassword.type="password"
    }
}
