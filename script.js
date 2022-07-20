let SE=document.querySelectorAll(".slide-element");

count=1;
let CE = document.querySelector(".current");
CE.classList.remove("current");
SE[0].classList.add("current");
setInterval(()=>{
    count++;
    let CE = document.querySelector(".current");
    CE.classList.remove("current");

    if(count>SE.length){
        SE[0].classList.add("current");
        count=1;
    }
    else{
        CE.nextElementSibling.classList.add("current");
    }
    
},1000)

