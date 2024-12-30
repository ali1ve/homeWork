// let ul = document.querySelector("ul")
// let linkA = document.querySelectorAll("a")


// linkA.forEach(a => {
//     a.addEventListener("click", ()=>{
//         e.target.style.color = "green"

//     })

// });

const links = document.querySelectorAll("a"); 


    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

let image = document.querySelectorAll("img")

image.forEach(e => {
    e.addEventListener("click" , function (){
        image.forEach(img => img.classList.remove("large"))
        this.classList.add("large")

    } )

})


