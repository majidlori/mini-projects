// let ID;

// const btn= document.getElementById('start')
// const btn2= document.getElementById('stop')

// function changetext(){
//     document.getElementById('message').innerHTML='my name is majid lori'
// }
// function start(){
//      ID = window.setTimeout(changetext,3000)
// }
// btn.addEventListener('click',start)
// // btn2.addEventListener('click',stop)



// function stop(){
//     window.clearTimeout(ID)
// }


// ----------------------------------------------------------------------------------------------------

// let ID;

// let second = 0;

// const btn= document.getElementById('start')
// const btn2= document.getElementById('stop')

// function changetext(){
//     document.getElementById('message').innerHTML= second + ' second'
//     second++;
// }
// function start(){
//      ID = window.setInterval(changetext,1000)
// }
// btn.addEventListener('click',start)
// // btn2.addEventListener('click',stop)



// function stop(){
//     window.clearInterval(ID)
// }

// ----------------------------------------------------------------------------------------------------

let ID;

let second = 0;

const btn= document.getElementById('start')
const btn2= document.getElementById('stop')

function changetext(){
    document.getElementById('message').innerHTML= second + ' second'
    second++;
}
function start(){
     ID = window.setInterval(changetext,1000)
}
btn.addEventListener('click',start)
// btn2.addEventListener('click',stop)



function stop(){
    window.clearInterval(ID)
}


function reset(){
    second=0
    stop()
    document.getElementById('message').innerText= second + ' second'

}








