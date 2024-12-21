
let bt = document.getElementById("but")
let ngrid
let main = document.querySelector("div.main")
// "grid-template-columns: repeat(2,1fr); grid-template-rows: repeat(2,1fr)"

bt.onclick = ()=>{
    // location.reload()
    ngrid=prompt('Enter new grid size (1~100)')
    main.innerHTML = ''
    main.style.gridTemplateColumns= `repeat(${ngrid},1fr)`;
    main.style.gridTemplateRows= `repeat(${ngrid},1fr)`;
    for (let i = 1;i<=ngrid*ngrid;i++){
        div = document.createElement("div")
        div.setAttribute("class","a")
        div.style.cssText = "border:solid"
        main.appendChild(div)
    }
    let a = document.querySelectorAll(".a")

    a.forEach((x)=>{
        x.addEventListener("mouseover",()=>{
            x.style.backgroundColor = `rgb(${Math.random()*270}, ${Math.random()*270}, ${Math.random()*270})`
        })
    })
}
