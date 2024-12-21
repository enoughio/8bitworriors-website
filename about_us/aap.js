// var crsr = document.querySelector(".cursor");
// var blurs = document.querySelector(".cursor-blur");

// document.addEventListener("mousemove", function (dets) {
// crsr.style.left = dets.x + "px";
// crsr.style.top = dets.y + "px";
// blurs.style.left = dets.x - 150 + "px";
// blurs.style.top = dets.y - 150 + "px";
// });

document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    const cursorBlur = document.querySelector('.cursor-blur');

    // Update cursor position with a slight offset to center it
    const posX = e.pageX - cursor.offsetWidth / 2;
    const posY = e.pageY - cursor.offsetHeight / 2;

    // Use requestAnimationFrame for smoother animations
    requestAnimationFrame(() => {
        cursor.style.transform = `translate(${posX}px, ${posY}px)`;
        cursorBlur.style.transform = `translate(${posX - (cursorBlur.offsetWidth / 2)}px, ${posY - (cursorBlur.offsetHeight / 2)}px)`;
        
        // Change cursor color when hovering over links
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.backgroundColor = '#FF5733'; // Change to highlight color
                link.classList.add('link-highlight'); // Add highlight class
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.backgroundColor = '#04F96E'; // Revert to original color
                link.classList.remove('link-highlight'); // Remove highlight class
            });
        });
    });
});


window.onload = function() {
    const bit1 = document.getElementById('bit1');
    
    // Delay before applying animation
    setTimeout(() => {
        bit1.style.animation = 'slideInBounce 0.7s forwards';
        bit1.style.opacity = '1'; // Ensure it becomes visible
    }, 200); // Delay in milliseconds
};
