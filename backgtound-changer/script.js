// window.onload=function(){
//     const btn = document.getElementById('btn')
//     btn.addEventListener('click',function(){
//         document.body.style.background = randomBg()
//     })

//     function randomBg(){
//         return `rgb(${Math.floor(Math.random()*255)} , ${Math.floor(Math.random()*255)} , ${Math.floor(Math.random()*255)})`
//     }
// }


// -----------------------------------------------------------------------

setInterval(randomBg,1000)
function randomBg(){
    document.body.style.background = `hsl(${Math.floor(Math.random()*360)},100% , 50%)`
}




