window.onload= function(){
    const btn =document.getElementById('btn')
    const container =document.getElementById('container')
    btn.addEventListener('click',function(){
        creatseNotification()
    })
    function creatseNotification (){
        const notif = document.createElement('div')
        notif.classList.add('toast')
        notif.innerText = 'only god'
        container.appendChild(notif)
        setTimeout(() => {
            notif.remove()
        }, 3000);
    }


}