window.onload=function(){
    const popup = document.querySelector('.popup');
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    open.addEventListener('click',function(){
        open.style.display='none'
        popup.classList.add('active')
    })

    close.addEventListener('click',function(){
        open.style.display = 'block'
        popup.classList.remove('active')
    })




}