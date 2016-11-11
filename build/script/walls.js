function buildWalls(){
    // FRONT WALL:
    var frontWall = document.createElement("a-entity");
        frontWall.setAttribute("geometry", {primitive: "plane"});
        frontWall.setAttribute("geometry", "height", 30);
        frontWall.setAttribute("geometry", "width", 50);
        frontWall.setAttribute("position", "0 0 -5.55");

    scene.appendChild(frontWall);

    // LEFT WALL:
    var leftWall = document.createElement("a-entity");
        leftWall.setAttribute("geometry", {primitive: "plane"});
        leftWall.setAttribute("geometry", "height", 30);
        leftWall.setAttribute("geometry", "width", 50);
        leftWall.setAttribute("rotation", "0 90 0");
        leftWall.setAttribute("position", "-25 0 19.45")
    
    scene.appendChild(leftWall);

    // RIGHT WALL:
    var rightWall = document.createElement("a-entity");
        rightWall.setAttribute("geometry", {primitive: "plane"});
        rightWall.setAttribute("geometry", "height", 30);
        rightWall.setAttribute("geometry", "width", 50);
        rightWall.setAttribute("rotation", "0 -90 0");
        rightWall.setAttribute("position", "25, 0, 19.45");
    
    scene.appendChild(rightWall);

    // BACK WALL:
    var backWall = document.createElement("a-entity");
        backWall.setAttribute("geometry", {primitive: "plane"});
        backWall.setAttribute("geometry", "height", 30);
        backWall.setAttribute("geometry", "width", 50);
        backWall.setAttribute("rotation", "180 0 0");
        backWall.setAttribute("position", "0 0 44.45");
    
    scene.appendChild(backWall);

    // // CEILING:
    //     var ceiling = document.createElement("a-entity");
    //         ceiling.setAttribute("geometry", {primitive: "plane"});
    //         ceiling.setAttribute("geometry", "height", 50);
    //         ceiling.setAttribute("geometry", "width", 50);
    //         ceiling.setAttribute("rotation", "90 0 0");
    //         ceiling.setAttribute("position", "0 30 0");      
    // scene.appendChild(ceiling);     
}
