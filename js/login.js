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
    var count=0
    checkdetails.filter((a,b)=>{
        if(a.name===lusername&&a.pass===lpassword){
            count++
        }
        else{

        }
    })
    
    if(count>0){
        location.href="home-index.html"
    }
    else{
        alert("enter your details correctly")
        console.log(count)
    }
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
