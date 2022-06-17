//On load, create 3d cube
function setup (imgSize=300,object="a",imgPath="img"){
var x = document.getElementsByClassName("box-page");
var j = 0;
    //create 3d cube
    for (var i = 0; i < x.length; i++) {
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++){
            var divs = document.createElement("div");
            var att = document.createAttribute("id");
            if(j<54){
            att.value = `x${j}`;
            j++;
            }
            divs.setAttributeNode(att);
            divs.style.cssText = `width: ${imgSize/3}px; height: ${imgSize/3}px; border: ${box.clientWidth/450}px solid black; box-sizing: border-box; background-image: url(${imgPath}/${object}${i}.jpg); background-size: ${imgSize}px ${imgSize}px;`;
            x[i].appendChild(divs);
            divs.style.left = `${c*imgSize/3}px`;
            divs.style.top = `${r*imgSize/3}px`;
            divs.style.backgroundPositionX = `${-c*imgSize/3}px`;
            divs.style.backgroundPositionY = `${-r*imgSize/3}px`;
            }
        }
    }
    //add animation styles to each cube
    for(var j = 1; j<=54; j++){
        var nine = 9;
        var x = document.getElementById(`x${j-1}`);
        var att = document.createAttribute("class");
        if(j <= nine){
        att.value = `animation${j}`;
        }
        if(j > nine && j <= nine*2){
        att.value = `animation${j-nine}`;
        }
        if(j > nine*2 && j <= nine*3){
        att.value = `animation${j-nine*2}`;
        }
        if(j > nine*3 && j <= nine*4){
        att.value = `animation${j-nine*3}`;
        }
        if(j > nine*4 && j <= nine*5){
        att.value = `animation${j-nine*4}`;
        }
        if(j > nine*5 && j <= nine*6){
        att.value = `animation${j-nine*5}`;
        }
        x.setAttributeNode(att);
        }
    //change css top,btm,lft,rgt,frt,bck
    var top = document.getElementById("top");            
    var btm = document.getElementById("btm");
    var rgt = document.getElementById("rgt");
    var lft = document.getElementById("lft");
    var frt = document.getElementById("frt");
    var bck = document.getElementById("bck");
    top.style.transform = `translateZ(${imgSize/2}px)`;
    btm.style.transform = `translateZ(${-imgSize/2}px)`;
    rgt.style.transform = `translateX(${imgSize/2}px) rotateY(90deg)`;
    lft.style.transform = `translateX(-${imgSize/2}px) rotateY(-90deg)`;
    frt.style.transform = `translateY(${imgSize/2}px) rotateX(90deg)`;
    bck.style.transform = `translateY(${-imgSize/2}px) rotateX(-90deg)`;
}
//Change Image Function
function changeImg(imgPath="img"){
    var x;
    imgPath = currentImgPath();
    if(imgPath == "img"){x = 4;} else x = 5;
    var box = document.getElementById("box");
    var strStyle = document.getElementById("x0").style.cssText;
    var locationImg = strStyle.indexOf(`${imgPath}/`)+x;
    var object = strStyle.charAt(parseInt(locationImg));
    //create a-z array
    var arr = [], charA = "a", charZ = "z";
    var i = charA.charCodeAt(0), j = charZ.charCodeAt(0), k = object.charCodeAt(0);
    //check next image exist or not
    var img = new Image();
    img.src = `${imgPath}/${String.fromCharCode(k+1)}1.jpg`;
    //if image load on error, execute function and return "a" to img.onerror();
    img.onerror = ()=>{
        object = "a";
        removeBox();
        setup (box.clientWidth,object,imgPath);
    }
    for (; i <= j; i++) {
        arr.push(String.fromCharCode(i));
    }
    k -= 97;
    if(object == arr[k]){
        object = arr[k+1];
    } else object = "a";
    removeBox();
    setup (box.clientWidth,object,imgPath);
}
function changeCtg(){    
    var box = document.getElementById("box");
    var strStyle = document.getElementById("x0").style.cssText;
    var locationImgPath = strStyle.indexOf("-image")+16;
    var lastIndexOfImgPath = strStyle.charAt(parseInt(locationImgPath));
    if(lastIndexOfImgPath != 2){
        imgPath="img2";
    } else 
    {
        imgPath="img";
    }
    removeBox();
    setup (box.clientWidth,object="a",imgPath);
}
function currentImgPath(){
    var imgPath;
    var strStyle = document.getElementById("x0").style.cssText;
    var locationImgPath = strStyle.indexOf("-image")+16;
    var lastIndexOfImgPath = strStyle.charAt(parseInt(locationImgPath));
    if(lastIndexOfImgPath == 2){imgPath="img2";} else imgPath="img";
    return imgPath;
}
//Effect Animation Controller
function removeEffect(){
    for(var j = 1; j<=54; j++){
        var nine = 9;
        var x = document.getElementById(`x${j-1}`);
        if(j <= nine){
        x.classList.remove(`animation${j}`);
        }
        if(j > nine && j <= nine*2){
        x.classList.remove(`animation${j-nine}`);
        }
        if(j > nine*2 && j <= nine*3){
        x.classList.remove(`animation${j-nine*2}`);
        }
        if(j > nine*3 && j <= nine*4){
        x.classList.remove(`animation${j-nine*3}`);
        }
        if(j > nine*4 && j <= nine*5){
        x.classList.remove(`animation${j-nine*4}`);
        }
        if(j > nine*5 && j <= nine*6){
        x.classList.remove(`animation${j-nine*5}`);
        }
        }
}
function applyEffect(){       
        removeEffect();
        setTimeout(() => {
        for(var j = 1; j<=54; j++){
            var nine = 9;
            var x = document.getElementById(`x${j-1}`);
            if(j <= nine){
            x.classList.add(`animation${j}`);
            }
            if(j > nine && j <= nine*2){
            x.classList.add(`animation${j-nine}`);
            }
            if(j > nine*2 && j <= nine*3){
            x.classList.add(`animation${j-nine*2}`);
            }
            if(j > nine*3 && j <= nine*4){
            x.classList.add(`animation${j-nine*3}`);
            }
            if(j > nine*4 && j <= nine*5){
            x.classList.add(`animation${j-nine*4}`);
            }
            if(j > nine*5 && j <= nine*6){
            x.classList.add(`animation${j-nine*5}`);
            }
            };
        }, 0);
        playEffect();
}
function playEffect() {    
    for(var j = 1; j <=54; j++){
    var x = document.getElementById(`x${j-1}`);
    x.style.animationPlayState = "running";
    }
}
function pauseEffect() {
    for(var j = 1; j <=54; j++){
    var x = document.getElementById(`x${j-1}`);
    x.style.animationPlayState = "paused";
    }
}
//Cube Animation Controller
function playCube() {
    var box = document.getElementById("box");
    box.style.animationPlayState = "running";
    box.classList.add("boxAnimation");
}
function pauseCube() {
    mouse =false;
    var box = document.getElementById("box");
    box.style.animationPlayState = "paused";
}
function zoomInCube() {
     //get container, box, box-page width and height
     var cont = document.getElementById("cube_container");
     var box = document.getElementById("box");
     var boxPage = document.getElementsByClassName("box-page");
     var imgSize15 = box.clientWidth*1.25;
     //pass back current image as object
     var x;
     imgPath = currentImgPath();
     if(imgPath == "img"){x = 4;} else x = 5;
     console.log(imgPath,x);
     var box = document.getElementById("box");
     var strStyle = document.getElementById("x0").style.cssText;
     var locationImg = strStyle.indexOf(`${imgPath}/`)+x;
     var object = strStyle.charAt(parseInt(locationImg));
     //resize
     removeBox();
     setup (imgSize15,object,imgPath); 
        cont.style.width = `${cont.clientWidth*1.25}px`;
        cont.style.height = `${cont.clientHeight*1.25}px`;
        box.style.width = `${box.clientWidth*1.25}px`;
        box.style.height = `${box.clientHeight*1.25}px`;           
        for(i=0 ; i<boxPage.length ; i++){        
        boxPage[i].style.width = `${boxPage[i].clientWidth*1.25}px`;
        boxPage[i].style.height = `${boxPage[i].clientHeight*1.25}px`;
        }
        for(var j = 1; j <=54; j++){
        var img = document.getElementById(`x${j-1}`);
        img.style.width = `${img.clientWidth}px`;
        img.style.height = `${img.clientHeight}px`;
        }
    pauseEffect();
}
function zoomOutCube() {         
     //get container, box, box-page width and height
     var cont = document.getElementById("cube_container");
     var box = document.getElementById("box");
     var boxPage = document.getElementsByClassName("box-page");
     var imgSize15 = box.clientWidth*0.75;
     //pass back current image as object
     var x;
     imgPath = currentImgPath();
     if(imgPath == "img"){x = 4;} else x = 5;
     console.log(imgPath,x);
     var box = document.getElementById("box");
     var strStyle = document.getElementById("x0").style.cssText;
     var locationImg = strStyle.indexOf(`${imgPath}/`)+x;
     var object = strStyle.charAt(parseInt(locationImg));
     //resize
     removeBox();
     setup (imgSize15,object,imgPath); 
        cont.style.width = `${cont.clientWidth*0.75}px`;
        cont.style.height = `${cont.clientHeight*0.75}px`;
        box.style.width = `${box.clientWidth*0.75}px`;
        box.style.height = `${box.clientHeight*0.75}px`;           
        for(i=0 ; i<boxPage.length ; i++){        
        boxPage[i].style.width = `${boxPage[i].clientWidth*0.75}px`;
        boxPage[i].style.height = `${boxPage[i].clientHeight*0.75}px`;
        }
        for(var j = 1; j <=54; j++){
        var img = document.getElementById(`x${j-1}`);
        img.style.width = `${img.clientWidth}px`;
        img.style.height = `${img.clientHeight}px`;
        }
    pauseEffect();
}
function removeBox(){
    for(var j = 1; j<=54; j++){
        var x = document.getElementById(`x${j-1}`);
        x.remove();
    }
}
//Arrow Controller
let mouse = false;
function mousedown(event){
    var x = event.currentTarget.id;
    mouse = true;
    if(x == "arrowLeft") {arrowLeft();}
    else if(x == "arrowUp") {arrowUp();}
    else if(x == "arrowDown") {arrowDown();}
    else if (x == 'arrowRight') {arrowRight();}
    else if (x == 'arrowZ_left') {arrowZ_left();}
    else if (x == 'arrowZ_right') {arrowZ_right();}
}
function arrowLeft(){
    if(mouse==true){
        var xValue = parseInt(getXDegree());
        if(isNaN(xValue)){xValue=45}
        var yValue = parseInt(getYDegree());
        if(isNaN(yValue)){yValue=45}
        var zValue = parseInt(getZDegree());
        if(isNaN(zValue)){zValue=0}
        var box = document.getElementById("box");
        yValue -= 20;
        // console.log("Current Y value is " + xValue);
        box.style.transform = `rotateX(${xValue}deg) rotateY(${yValue}deg) rotateZ(${zValue}deg)`;
        box.classList.remove("boxAnimation");
        setTimeout("arrowLeft()",100);
        // console.log("Current X value is " + xValue);
        // console.log("Current Y value is " + yValue);
    } else return false;
}
function arrowUp(){
    if(mouse==true){
        var xValue = parseInt(getXDegree());
        if(isNaN(xValue)){xValue=45}
        var yValue = parseInt(getYDegree());
        if(isNaN(yValue)){yValue=45}
        var zValue = parseInt(getZDegree());
        if(isNaN(zValue)){zValue=0}
        var box = document.getElementById("box");
        xValue += 20;
        box.style.transform = `rotateX(${xValue}deg) rotateY(${yValue}deg) rotateZ(${zValue}deg)`;
        box.classList.remove("boxAnimation");
        setTimeout("arrowUp()",100);
        // console.log("Current Y value is " + yValue);
    } else return false;
}
function arrowDown(){
    if(mouse==true){
        var xValue = parseInt(getXDegree());
        if(isNaN(xValue)){xValue=45}
        var yValue = parseInt(getYDegree());
        if(isNaN(yValue)){yValue=45}
        var zValue = parseInt(getZDegree());
        if(isNaN(zValue)){zValue=0}
        var box = document.getElementById("box");
        xValue -= 20;
        box.style.transform = `rotateX(${xValue}deg) rotateY(${yValue}deg) rotateZ(${zValue}deg)`;
        box.classList.remove("boxAnimation");
        setTimeout("arrowDown()",100);
        // console.log("Current Y value is " + yValue);
    } else return false;
}
function arrowRight(){
    if(mouse==true){
        var xValue = parseInt(getXDegree());
        if(isNaN(xValue)){xValue=45}
        var yValue = parseInt(getYDegree());
        if(isNaN(yValue)){yValue=45}
        var zValue = parseInt(getZDegree());
        if(isNaN(zValue)){zValue=0}
        var box = document.getElementById("box");
        yValue += 20;
        box.style.transform = `rotateX(${xValue}deg) rotateY(${yValue}deg) rotateZ(${zValue}deg)`;
        box.classList.remove("boxAnimation");
        setTimeout("arrowRight()",100);
        // console.log("Current X value is " + xValue);
    } else return false;
}
function arrowZ_left(){
    if(mouse==true){
        var xValue = parseInt(getXDegree());
        if(isNaN(xValue)){xValue=45}
        var yValue = parseInt(getYDegree());
        if(isNaN(yValue)){yValue=45}
        var zValue = parseInt(getZDegree());
        if(isNaN(zValue)){zValue=0}
        var box = document.getElementById("box");
        zValue -= 20;
        box.style.transform = `rotateX(${xValue}deg) rotateY(${yValue}deg) rotateZ(${zValue}deg)`;
        box.classList.remove("boxAnimation");
        setTimeout("arrowZ_left()",100);
    } else return false;
}
function arrowZ_right(){
    if(mouse==true){
        var xValue = parseInt(getXDegree());
        if(isNaN(xValue)){xValue=45}
        var yValue = parseInt(getYDegree());
        if(isNaN(yValue)){yValue=45}
        var zValue = parseInt(getZDegree());
        if(isNaN(zValue)){zValue=0}
        var box = document.getElementById("box");
        zValue += 20;
        box.style.transform = `rotateX(${xValue}deg) rotateY(${yValue}deg) rotateZ(${zValue}deg)`;
        box.classList.remove("boxAnimation");
        setTimeout("arrowZ_right()",100);
        // console.log("Current Z value is " + zValue);
    } else return false;
}
function keyboard(event){
    var map = {};
    event = event || window.event;
    mouse = true;
    map[event.keyCode] = event.type == 'keydown';
    if(map[65]) { arrowLeft();}
    else if(map[87]) {arrowUp();}
    else if(map[83]) {arrowDown();}
    else if (map[68]) {arrowRight();}
    else if(map[69]){arrowZ_right();}
    else if(map[81]){arrowZ_left();}
}
function stopEvent(){
    mouse = false;
}
function getXDegree(){
    var box = document.getElementById("box");
    var strTransform = box.style.transform;
    var rotateXValue = strTransform.substring(strTransform.indexOf("rotateX")+8, strTransform.indexOf("deg"));
    var X_Value = parseFloat(rotateXValue).toFixed(0);
    return X_Value;
}
function getYDegree(){
    var box = document.getElementById("box");
    var strTransform = box.style.transform;
    var rotateYValue = strTransform.substring(strTransform.indexOf("rotateY")+8, strTransform.lastIndexOf("deg"));
    var Y_Value = parseFloat(rotateYValue).toFixed(0);
    return Y_Value;
}
function getZDegree(){
    var box = document.getElementById("box");
    var strTransform = box.style.transform;
    var rotateZValue = strTransform.substring(strTransform.indexOf("rotateZ")+8, strTransform.lastIndexOf("deg"));
    var Z_Value = parseFloat(rotateZValue).toFixed(0);
    return Z_Value;
}
//Get Box Page X53 after it has been created
setTimeout(() => {
var element = document.getElementById(`x53`);
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
}, 100);
//Get event time start & end, call applyEffect when time end = 4.5s
function listener(event) {
    switch(event.type) {
        case "animationstart":
            var time = event.elapsedTime;
            // console.log(`Animation starts at "${time}"s`);
            break;
        case "animationend":
            var time = event.elapsedTime;
            // console.log(`Animation ends at "${time}"s`);
            if(time == 4.5){
                applyEffect();
                sleep(1000);
            }
            break;
    }
}
function sleep(ms) {
    // console.log(`Animation sleep ${ms/1000}s`);
    var time_ms = new Date().getTime();
    while(new Date().getTime() < time_ms + ms){}
}
//Change cube rotation by mouse move
function getMousePos1(pos2x, pos2y) {
    mouse = true;
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        if(mouse==true){
            //event.clientX => current coordinates of the mouse pointer in that area
            var eventDoc, doc, body;
            event = event || window.event;
            if (event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                mousePos1x = event.clientX;
                mousePos1y = event.clientY;
            }
            // console.log(mousePos1x, mousePos1y);
            getMousePos2();
            if(mousePos1x != pos2x){
                var xChgValue = mousePos1x - pos2x;
                var xValue = parseInt(getXDegree());
                if(isNaN(xValue)){xValue=45}
                var yValue = parseInt(getYDegree());
                if(isNaN(yValue)){yValue=45}
                var zValue = parseInt(getZDegree());
                if(isNaN(zValue)){zValue=0}
                var box = document.getElementById("box");
                box.style.transform = `rotateX(${xValue}deg) rotateY(${yValue + xChgValue}deg) rotateZ(${zValue}deg)`;
                box.classList.remove("boxAnimation");
                // console.log(`${box.style.transform}`);
            }
            if(mousePos1y != pos2y){
                var yChgValue = mousePos1y - pos2y;
                var xValue = parseInt(getXDegree());
                if(isNaN(xValue)){xValue=45}
                var yValue = parseInt(getYDegree());
                if(isNaN(yValue)){yValue=45}
                var zValue = parseInt(getZDegree());
                if(isNaN(zValue)){zValue=0}
                var box = document.getElementById("box");
                box.style.transform = `rotateX(${xValue - yChgValue}deg) rotateY(${yValue}deg) rotateZ(${zValue}deg)`;
                box.classList.remove("boxAnimation");
                // console.log(`${box.style.transform}`);
            }
        }
    }
}
function getMousePos2() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
    var eventDoc, doc, body;
    event = event || window.event;
        if(mouse==true){
            if (event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                mousePos2x = event.clientX;
                mousePos2y = event.clientY;
            }
            getMousePos1(mousePos2x, mousePos2y);
        }
    }
}