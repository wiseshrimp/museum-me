function addWiseMonkey(posts) {
    var chimp = document.querySelector("#wise-chimp");
    chimp.addEventListener("click", function () {
        if (document.querySelector("#status-text")) {
            document.querySelector("#status-text").parentNode.removeChild(document.querySelector("#status-text"));
        }
        var i = Math.floor(Math.random() * posts.length);
        var status = posts[i];
        var text = document.createElement("a-entity");
        text.setAttribute("id", "status-text");
        text.setAttribute("text", "text: " + status);
        text.setAttribute("rotation", "0 -90 0");
        text.setAttribute("position", "23 6 -1.6");
        text.setAttribute("scale", "0.7 0.7 0.7");
        scene.appendChild(text);
    })
}