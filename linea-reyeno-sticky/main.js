window.addEventListener("load", _ => {
   let raya = document.querySelector("raya")
   let total_scroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
   window.addEventListener("scroll", ev => {
      if (window.pageYOffset == total_scroll) {
         document.documentElement.style.setProperty("--dataScroll", '100%')
         console.log("iguales");
      }
      else {
         document.documentElement.style.setProperty("--dataScroll", `${(window.pageYOffset * 107) / total_scroll}%`)
      }
   })
})