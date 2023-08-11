const  serchblog=()=>{
    let serchinput=document.getElementById("serch").value
    
    fetch(`http://localhost:8090/blog`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        let cat= data.filter((item)=>item.category.match(serchinput.toLowerCase()))
        blogdisplay(cat)
    })
}
document.getElementById("searchbtn").addEventListener("click", serchblog)
document.getElementById("serch").addEventListener("input",(e)=>{
    console.log(e.key);
    serchblog()
})

const blogdisplay=(data)=>{
    // console.log(data);
    document.getElementById("card").innerHTML="";
    data.map((ele)=>{
        let img=document.createElement("img")
       img.src=ele.img
       let title=document.createElement("h1")
       title.innerHTML=ele.title
       title.setAttribute("id","title")

       let category=document.createElement("h6")
       category.innerHTML=ele.category

       let blogcontent=document.createElement("p")
       blogcontent.innerHTML=ele.blogcontent;
       blogcontent.setAttribute("id","h4")
       let btn=document.createElement("button")
       btn.innerHTML="read more..."
      
       
       let div=document.createElement("div")
       div.setAttribute("id","subdiv")
       div.append(img,title,category,blogcontent,btn);
       
       document.getElementById("card").append(div)

    

    })

}



fetch("http://localhost:8090/blog")
.then((res)=>res.json())
.then((data)=>blogdisplay(data))