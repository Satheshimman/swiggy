var signin=document.getElementById("signinform");
var username=document.getElementById("username");
var usermail=document.getElementById("usermail");
var usernum=document.getElementById("usernum");
var userpass1=document.getElementById("userpass1");
var userpass2=document.getElementById("userpass2");
var err=document.getElementsByClassName("error");
var count=0

const [array,Setarray]=useState=[]
signin.addEventListener("submit",function(e){
    e.preventDefault()
    test(username,0,"enter your user name");
	test(usermail,1,"enter your user email");
	test(usernum,2,"enter your number");
	test(userpass1,3,"enter your password");
	test(userpass2,4,"re enter password");

})


let test=function(id,i,message){
	
	
	if(id.value.trim()==""){
	id.style.border="1px solid red";
	err[i].innerHTML=message;
	err[i].style.color="red"
	}

   else if(userpass1.value!==userpass2.value){
    
        userpass1.style.border="1px solid red";
        err[3].innerHTML=message;
        err[3].style.color="red"
        userpass2.style.border="1px solid red";
        err[4].innerHTML=message;
        err[4].style.color="red"
    }
		
	else{
	id.style.border="1px solid green";
	err[i].innerHTML="correct";
	err[i].style.color="green"
	err[i].style.fontSize="12px"
	
     next()
	}
	
	

}



function next(){
	
	
	if(username.value && usermail.value && userpass1.value && usernum.value){
		
		
		
		// localStorage.setItem("fsname",JSON.stringify(fname.value));
		// localStorage.setItem("lsname",JSON.stringify(lname.value));
		// localStorage.setItem("psword",JSON.stringify(pass.value));
		// localStorage.setItem("email",JSON.stringify(mail.value));
		

        let obj={
            name:username.value,
            mail:usermail.value,
            num:usernum.value,
            pass:userpass1.value
        }

       
      
 		// Setarray([...array,obj])
        localStorage.setItem("userdetails",JSON.stringify([obj]))
		
		location.href="login-index.html"

		
	}
	else{
		alert("enter your coorect all values")
	}

}