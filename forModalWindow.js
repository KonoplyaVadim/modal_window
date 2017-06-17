/**
 * Created by konoplya on 17.06.2017.
 */
window.onload=function(){
    var openButton=document.getElementById("open");
    var back=document.getElementById("back");
    var window=document.getElementById("window");
    var closeButton=document.getElementById("close");
    openButton.addEventListener("click",function(){
        back.style.display="block";
        window.style.display="block";
        //openButton.style.display="none";
    },false);
    closeButton.addEventListener("click",function(){
        back.style.display="none";
        window.style.display="none";
        //openButton.style.display="block";
        //document.body.style.backgroundColor="red";
    })
}

