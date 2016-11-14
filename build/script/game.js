var scene = document.querySelector('a-scene');
var model, coords, pos;
var models = ["../models/statue_head.obj", "../models/boletus.obj", "../models/chimp.obj"]
function addInteractivity(url, position, side) {
    var image = document.getElementById(url);

    // STATUE HEAD    
    image.addEventListener("click", function () {
        t = 0;
        model = document.createElement("a-obj-model");
        model.setAttribute("src", "#statue-head");;

        model.addEventListener("click", function () {
            var pictureBox = document.createElement("a-box");
            pictureBox.setAttribute("material", "src", "url(" + url + ")");
            var modelPos = model.getAttribute("position");
            // console.log(modelPos);
            var pictureBoxAnimation = document.createElement("a-animation");
            pictureBoxAnimation.setAttribute("attribute", "scale");
            pictureBoxAnimation.setAttribute("begin", "4000");
            pictureBoxAnimation.setAttribute("to", "2 2 2");
            pictureBox.appendChild(pictureBoxAnimation);

            var pictureBoxWiggle = document.createElement("a-animation");
            pictureBoxWiggle.setAttribute("rotation");
            pictureBoxWiggle.setAttribute("dur", "1000");
            pictureBoxWiggle.setAttribute("fill", "forwards");
            pictureBoxWiggle.setAttribute("to", "0 180 0");
            pictureBoxWiggle.setAttribute("repeat", "indefinite");
            pictureBox.appendChild(pictureBoxWiggle);

            var pictureBoxFade = document.createElement("a-animation");
            pictureBoxFade.setAttribute("attribute", "material.opacity");
            pictureBoxFade.setAttribute("begin", "fade");
            pictureBoxFade.setAttribute("to", 0);
            pictureBox.appendChild(pictureBoxFade);
            pictureBox.addEventListener("click", function () {
                pictureBox.emit("fade");
            })
            // var modelCoor = modelPos.split(" ");
            // boxAnimation.setAttribute("from", modelPos);
            // boxAnimation.setAttribute("to", modelCoor[0] + " " + (Number(modelCoor[1]) + 2) + " " + modelCoor[2])
            pictureBox.setAttribute("position", modelPos);
            // pictureBox.appendChild(boxAnimation);
            scene.appendChild(pictureBox);
        })

        coords = image.getAttribute("position");
        pos = coords.x + " " + coords.y + " " + coords.z;
        // model.setAttribute("material", "src: url(" + url + ")");
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
