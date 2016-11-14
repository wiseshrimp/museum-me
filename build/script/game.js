var scene = document.querySelector('a-scene');
var model, coords, pos;
var models = ["../models/statue_head.obj", "../models/boletus.obj", "../models/chimp.obj"]
function addInteractivity(url, position, side) {
    var image = document.getElementById(url);
    var material = document.createElement("img");
    material.setAttribute("id", url + "-2");
    material.setAttribute("src", url);
    scene.appendChild(material);

    image.addEventListener("click", function () {
        t = 0;
        model = document.createElement("a-obj-model");
        model.setAttribute("src", "#statue-head");

        coords = image.getAttribute("position");
        pos = coords.x + " " + coords.y + " " + coords.z;
        // model.setAttribute("material", {src: "url(" + url + ")"})
        switch (side) {
            case "left":
                model.setAttribute("rotation", " 0 90 0");
                renderLeft();
                break;
            case "front":
                renderFront();
                break;
            case "right":
                model.setAttribute("rotation", " 0 -90 0");
                renderRight();
                break;
            case "back":
                model.setAttribute("rotation", " 0 180 0");
                renderBack();
                break;
        }

        model.setAttribute("position", pos);
        scene.appendChild(model);

    });

    function renderLeft() {
        t += 0.01;
        model.setAttribute("position", (Number(coords.x) + t) + " " + coords.y + " " + coords.z);
        requestAnimationFrame(renderLeft);
    }
    function renderFront() {
        t += 0.01;
        model.setAttribute("position", (coords.x + " " + coords.y + " " + (Number(coords.z) + t)));
        requestAnimationFrame(renderFront);
    }
    function renderRight() {
        t += 0.01;
        model.setAttribute("position", (Number(coords.x) - t) + " " + coords.y + " " + coords.z);
        requestAnimationFrame(renderRight);
    }
    function renderBack() {
        t += 0.01;
        model.setAttribute("position", (coords.x + " " + coords.y + " " + (Number(coords.z) - t)));
        requestAnimationFrame(renderBack);
    }
}
