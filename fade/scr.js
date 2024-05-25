let fade;
let fade2;

function fadeout(){
    clearInterval(fade2)
    fade=setInterval(hide,25)
}

function hide(){
    let img=document.getElementById('img1');
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'))
    if(opacity>0){
        opacity -=0.01;
        img.style.opacity = opacity
    }
    else{
        clearInterval(fade)
    }

}
function fadein(){
    clearInterval(fade)
    fade2=setInterval(show,25)
}

function show(){
    let img=document.getElementById('img1');
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'))
    if(opacity<1){
        opacity +=0.01;
        img.style.opacity = opacity
    }
    else{
        clearInterval(fade2)
    }

}





