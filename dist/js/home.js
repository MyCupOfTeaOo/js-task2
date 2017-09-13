/**
 * Created by zou on 2017/9/4.
 */
function move() {
    if (!document.getElementsByClassName) return false;
    if (!document.getElementsByClassName("bb-f")) return false;
    var sign = document.getElementsByClassName("bb-f")[0];
    var next = sign.getElementsByClassName("next")[0];
    var left = sign.getElementsByClassName("left")[0];
    var $ = document.getElementsByClassName("subnav");
    aa = Array.prototype.slice.call($);
    var sub = document.getElementsByClassName("sub")[0];
    //四个小点点事件托管
    sub.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.className == "subnav"){
            sign.count = aa.indexOf(ev.target);
            if (sign.count >= 3){
                next.style.display = "none";
            }
            if (sign.count < 3){
                next.style.display = "block";
            }
            if (sign.count <= 0){
                left.style.display = "none";
            }
            if (sign.count > 0){
                left.style.display = "block";
            }
            for (var i = 0; i <4; i++){
                $[i].style.backgroundColor = "#f0f0f0";
            }
            $[sign.count].style.backgroundColor = "#69d1e9";
            var num = -sign.count*100;
            moveElement("move",num,0,10);
        }
    };
   /* for (var i = 0; i < $.length; i++){
        $[i].onclick = function (i) {
            sign.count = aa.indexOf(i.target);
            if (sign.count >= 3){
                next.style.display = "none";
            }
            if (sign.count < 3){
                next.style.display = "block";
            }
            if (sign.count <= 0){
                left.style.display = "none";
            }
            if (sign.count > 0){
                left.style.display = "block";
            }
            console.log(i.target)
            console.log(sign.count)
            for (var i = 0; i <4; i++){
                $[i].style.backgroundColor = "#f0f0f0";
            }
            $[sign.count].style.backgroundColor = "#69d1e9";
            var num = -sign.count*100;
            moveElement("move",num,0,10);
        }
    }*/
    next.onclick = function () {
        //初始化一个计数器
        if (!sign.count) {
            sign.count = 0;
        }
        sign.count++;
        if (sign.count >= 3){
            next.style.display = "none";
        }
        if (sign.count < 3){
            next.style.display = "block";
        }
        if (sign.count <= 0){
            left.style.display = "none";
        }
        if (sign.count > 0){
            left.style.display = "block";
        }
        for (var i = 0; i <4; i++){
            $[i].style.backgroundColor = "#f0f0f0";
        }
        $[sign.count].style.backgroundColor = "#69d1e9";
        var num = -sign.count*100;
        moveElement("move",num,0,10);
    };
    left.onclick = function () {
        sign.count--;
        if (sign.count >= 3){
            next.style.display = "none";
        }
        if (sign.count < 3){
            next.style.display = "block";
        }
        if (sign.count <= 0){
            left.style.display = "none";
        }
        if (sign.count > 0){
            left.style.display = "block";
        }
        for (var i = 0; i <4; i++){
            $[i].style.backgroundColor = "#f0f0f0";
        }
        $[sign.count].style.backgroundColor = "#69d1e9";
        var num = -sign.count*100;
        moveElement("move",num,0,10);
    };
}
//element移动动画
function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement){
        clearTimeout(elem.movement);
    }
    if (!elem.style.left){
        elem.style.left = "0";
    }
    if (!elem.style.top){
        elem.style.top = "0";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos)/10);
        xpos += dist;
    }
    if (xpos > final_x){
        dist = Math.floor((final_x - xpos)/10);
        xpos += dist;
    }
    if (ypos < final_y){
        dist = Math.ceil((final_y - ypos)/10);
        ypos += dist;
    }
    if (ypos > final_y){
        dist = Math.floor((final_y - ypos)/10);
        ypos += dist;
    }
    elem.style.left = xpos + "%";
    elem.style.top = ypos + "%";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(move);
