var crsr = document.querySelector(".cursor");
var blurs = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
crsr.style.left = dets.x + "px";
crsr.style.top = dets.y + "px";
blurs.style.left = dets.x - 150 + "px";
blurs.style.top = dets.y - 150 + "px";
});

