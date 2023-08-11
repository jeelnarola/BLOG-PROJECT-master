 let popup = document.getElementById("popup");
 console.log(popup);

const open=()=>{
    popup.classList.add("open-login")
}
// let popup = localStorage.getItem("popup");
// console.log(popup);
    if (popup == true || popup == null) {
        window.addEventListener("load", function () {
          setTimeout(function open(event) {
            document.querySelector("#login").style.display = "block";
          }, 10);
      
        });
      } else {
        console.log(" finding value");
      }
      

document.getElementById("login").addEventListener("submit",(e)=>{
    e.preventDefault()


    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    // localStorage.setItem("popup",false)


    fetch(`http://localhost:8090/singup?email=${email}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        if(data.length > 0){
            for( let i=0; i < data.length; i++){
                if(data[i].email == email && data[i].password == password){
                  window.location.href="http://127.0.0.1:5500/index.html"
                }
            }
        }
        else{
            window.location.href="http://127.0.0.1:5500/sing-up/singup.html"
        }
    })
})
const get=async()=>{
    fetch("http://localhost:8090/singup")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}
get()

