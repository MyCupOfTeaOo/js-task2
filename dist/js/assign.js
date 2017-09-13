/**
 * Created by zou on 2017/9/13.
 */
function linearGradient() {
    if (!document.getElementById("slideBar")) return false;
    var s = document.getElementById("slideBar");
    s.oninput = function (i) {
        if (i != 1){
            NumberPeople(1);
        }
        var l = s.max - s.min;
        var value = s.value - s.min;
        var size = (value / l) * 100;
        size += "%";
        var css = "#slideBar::-webkit-slider-runnable-track{background: linear-gradient(270deg,#f9b852, #f9b852) no-repeat;background-size: "+size+" 100%;}";
       if (document.getElementsByTagName("style")){
           var t = document.getElementsByTagName("style")[0];
           t.innerText = css;
       }else{
           var t = document.createElement("style");
           t.innerText = css;
           document.body.appendChild(t)
       }
    };
    var less = document.getElementById("less");
    var plus = document.getElementById("plus");
    less.onclick = function () {
        s.value -= 1;
        s.oninput();
    };
    plus.onclick = function () {
        s.value = parseInt(s.value) + 1;
        s.oninput();
    };
}
function NumberPeople(i) {
    if (!document.getElementById("np")) return false;
    if (!document.getElementById("slideBar")) return false;
    var np = document.getElementById("np");
    var s = document.getElementById("slideBar");
    var reg = new RegExp("^([4-9]|1[0-8])","g");
    np.onblur = function () {
        /*if (np.value < 4 || np.value > 18){
         alert("请输入4-18范围内的数字");
         }*/
        var x = !reg.test(np.value);
        console.log(!reg.test(np.value))
        console.log(!reg.test(np.value))
        console.log(!reg.test(np.value))
        console.log("x="+x)
        if (x){
            console.log("...x="+x)
            console.log(!reg.test(np.value));
            console.log(np.value);
            alert("请输入4-18范围内的数字");
        }
    };
    if (i){
        np.value = s.value;
    }
    if (!i){
        np.oninput = function () {
            if (!np.value) {
                s.value = 4;
            }
            if (np.value){
                s.value = np.value;
            }
            s.oninput(1);
        }
    }
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
addLoadEvent(linearGradient);
addLoadEvent(NumberPeople);