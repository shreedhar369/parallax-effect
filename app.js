gsap.registerPlugin(Flip);
let container=document.querySelector(".container");
let box=document.querySelector(".box");

document.addEventListener("click",(e)=>
{
    let state=Flip.getState(".box");
    container.appendChild(box);
    // Flip.fit(box,container,{scale:true, duration:3,ease:"power2.inOut"});
    Flip.from(state,{ duration:3,ease:"power"});
});