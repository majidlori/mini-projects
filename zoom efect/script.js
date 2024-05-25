window.onload = function(){
    const container =document.getElementById('container')
    const img =document.querySelector('img')
    container.addEventListener('mousemove' , function(e){
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        img.style.transformOrigin = `${x}px ${y}px`
        img.style.transform = 'scale(2)'
    })

    container.addEventListener('mouseleave',function(e){
        img.style.transformOrigin = `center center`
        img.style.transform = 'scale(1)'
    })

}