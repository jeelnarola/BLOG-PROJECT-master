let poppu=document.querySelector("#popup");
// console.log(poppu)
function open(){
    poppu.classList.add("open-popup")
    // alert("yes")
}
function close(){
    poppu.classList.remove("open-popup")
}
const passwordshow=()=>{
    let show=document.getElementById("password")
    if(show.type=="password"){
        show.type="text"
    }
    else{
        show.type="password"
    }
}

document.getElementById("check-box").addEventListener("click", passwordshow)

document.getElementById("sing-up-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let poppu=document.querySelector("#popup")
    // console.log(poppu);

    let singdata={
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
            // emailpopup:document.getElementById("email-popup").value,
    }
    let email=document.getElementById("email").value
    let lastname=document.getElementById("lastname").value
    let firstname=document.getElementById("firstname").value
    let password=document.getElementById("password").value
    // let emailregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if(firstname.length==""){
        document.querySelector("i").style.display="block"
        document.querySelector(".fa-check").style.display="none"
        // document.getElementById("fristname").style.border;
        
    }
    else if(firstname.length>0){
        document.querySelector(".fa-check").style.display="block"
        document.querySelector("i").style.display="none"
    }
    if(lastname.length==""){
        document.querySelector(".last-x").style.display="block"
        document.querySelector(".last").style.display="none"
    }
    else if(lastname.length>0){
        document.querySelector(".last").style.display="block"
        document.querySelector(".last-x").style.display="none"
        // open()
    }
    if(password.length==0){
        document.querySelector(".password").innerHTML="enter a password"
    }else if(password.length<8){
        document.querySelector(".password").innerHTML="9 digit enter"
    }
    else{
        document.querySelector(".password").innerHTML=""
    }
    // if(firstname.length>0 && lastname.length>0 && email.length>0 && password.length>8)
    // {

       
    // }
    
        fetch(`http://localhost:8090/singup?email=${email}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.length>0){
                for(let i=0; i<data.length;i++){
                    if(data[i].email==email){
                        alert("User already exist")
                    }
                }
            }
            else{
                fetch("http://localhost:8090/singup",{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(singdata)
                })
            }
        })
})
fetch("http://localhost:8090/singup")
.then((res)=>res.json())
.then((data)=>console.log(data))

