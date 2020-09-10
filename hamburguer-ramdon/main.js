let body = document.body

document.addEventListener("animationend",(e)=>{
   if (e.target.matches(".heart"))
      e.target.remove()

})

function generateHeart(){
   let divHeart = document.createElement("div")
   divHeart.classList.add("heart")
   divHeart.textContent = "🍔"
   divHeart.style.left = Math.random()*100 + 'vw'
   body.appendChild(divHeart)
}

setInterval(generateHeart,600)