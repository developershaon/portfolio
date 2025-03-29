const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const hoversing = document.querySelector(".hoversing")


const videolist = [video1, video2, video3];


videolist.forEach(function(video){
    video.addEventListener('mouseover', function(){
      
        hoversing.classList.add("active");
    })
    video.addEventListener('mouseout', function() {
      
        hoversing.classList.remove("active");
    })
})



window.addEventListener("scroll", () => {
    let scrollY = window.scrollY; // Get scroll position
    let blurValue = Math.min(scrollY / 70, 40); // Limit blur to 40px

    document.querySelector(".autoBlur").style.filter = `blur(${blurValue}px)`;
});
