let popup=document.getElementById("bolg-popup")
console.log(popup);

const poppu=()=>{
    poppu.classList.add("open")
}

// const  serchblog=()=>{
//     let serchinput=document.getElementById("serch").value
//     console.log((serchinput));
//     fetch(`http://localhost:8090/blog?category=${serchinput}`)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data);
//         let cat=data.filter((item)=>item.category.match(serchinput.toLowerCase()))
//         blogdisplay(cat)
//     })
// }

// document.getElementById("serch").addEventListener("keypress",(e)=>{
//     console.log(e.key);
//     if(e.key=="enter"){
//         serchblog()
//     }
// })
// const blogdisplay=(data)=>{
//     console.log(data);
//     data.map((ele)=>{
//     //    let img=document.createElement("img")
//     //    img.src=ele.img
//     //    img.setAttribute("id","blogimg")
//     //    let title=document.createElement("h1")
//     //    title.innerHTML=ele.title
//     //    let category=document.createElement("h6")
//     //    category.innerHTML=ele.category
//     //    let blogcontent=document.createElement("h4")
//     //    blogcontent.innerHTML=ele.blogcontent
//     //    let btn=document.createElement("button")
//     //    btn.innerHTML="read more..."
//     //    btn.setAttribute("id","readmore")

//        document.getElementById("card").append(div)

    

//     })

// }

// let btnn=document.getElementById("readmore")
// console.log(btnn);

document.getElementById("blog").addEventListener("submit",(e)=>{
    e.preventDefault()
    let blogdata={
        img:document.getElementById("img").value,
        title:document.getElementById("title").value,
        category:document.getElementById("category").value,
        blogcontent:document.getElementById("BLOGS-CONTENT").value,
    }
    
    let img=document.getElementById("img").value
    let title=document.getElementById("title").value
    let category=document.getElementById("category").value
    let blogcontent=document.getElementById("BLOGS-CONTENT").value

    fetch("http://localhost:8090/blog",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(blogdata)
        })
        // window.location.href="http://127.0.0.1:5500/blog/blogjome.html"
})

fetch("http://localhost:8090/blog")
.then((res)=>res.json())
.then((data)=>blogdisplay(data))