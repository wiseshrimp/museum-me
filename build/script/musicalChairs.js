var scene = document.querySelector('a-scene');

function render() {
    t += 0.01;
    requestAnimationFrame(render);
    bench1.setAttribute("position", "3 " + (Math.sin(t * 2) + 1) + " 0"); 
}


function animateBenches() {
    var bench1 = document.getElementById("bench");
    var t = 0;
    render();
}