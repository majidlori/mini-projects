let intervalId;
let width=500;
let unit=1;
function increase(){
    clearInterval(intervalId)

     intervalId = setInterval(expand,20)
}

function expand(){

    if(width<600){
        width = width + unit;
        document.getElementById('img1').width=width
    }
    else{
        clearInterval(intervalId)
    }

}

function decrease(){
    clearInterval(intervalId)

    intervalId = setInterval(sharink,20)

}
function sharink(){
    if (width>500) {
        width = width - unit;
        document.getElementById('img1').width = width;
    }else{
        clearInterval(intervalId)
    }
}
