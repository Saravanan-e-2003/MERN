let wrap = document.querySelector("#wrapper");
let like = document.querySelector(".like");

wrap.addEventListener("dblclick",() => {
    like.style.opacity = "100";
    setTimeout(() =>{
        like.style.opacity = "0";
    },1000)
});


// setTimeout(() => {
//     like.style.transform = scale(0.1,1);
// }, 5000);

