document.addEventListener("DOMContentLoaded", function () {
    const billi = document.getElementById("billi");
  
    billi.addEventListener("mouseenter", function () {
      billi.classList.add("move");
    });
  
    billi.addEventListener("mouseleave", function () {
      billi.classList.remove("move");
    });
  
    document.addEventListener("mousemove", function (event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      moveBilli(mouseX, mouseY);
    });
  
    function moveBilli(x, y) {
      billi.style.left = x - billi.clientWidth / -10 + "px";
      billi.style.top = y - billi.clientHeight / -10 + "px";
    }
  });
  