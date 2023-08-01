"use strict";
let string = "salom alik alo"
let hero__items = getElement(".hero__items")
// let movies=kinolar.slice(0, 5)
const handleRanderMovei = (arr) =>{
    arr.forEach(item => {
        console.log(item.title);
        let li = createtag("li")
        li.style.width = "32%"
        li.className = "hero__item rounded text dark bg-light p-2 text-center my-3"
        let img = createtag("img")
        img.width = "300"
        img.heighth = "300"
        img.src =item.bigPoster
        img.classList.add("rounded")
        let name = createtag("h3")
        name.textContent = item.title.split(" ").length > 2 ? item.title.split(" ").slice(0, 2).join(" ") : item.title
        name.classList.add("py-2", "fs-2")
        let year = createtag("h4")
        year.appendChild(document.createTextNode(item.year))
        year.classList.add("text-danger")
        let trailer = createtag("a")
        trailer.classList.add("text-uppercase")
        trailer.textContent = "trailer"
        trailer.href = item.trailer
        trailer.classList.add("btn", "btn-success")
        let h4 = createtag ("h4")
        h4.appendChild(document.createTextNode(item.year))
        li.appendChild(img)
        li.appendChild(name)
        li.appendChild(year)
        li.appendChild(trailer)
        li.appendChild(h4)
        hero__items.appendChild(li)
    })
}
let naytija = handleRanderMovei(movies)
console.log(naytija);