let navListContentLink = document.querySelector('.navListContentLink')
let modal = document.querySelector('.modal')
let ModalTopSideExitBtn = document.querySelector('.ModalTopSideExitBtn')
navListContentLink.addEventListener('click',function(){
    if (modal.style.display == "none") {
        modal.style.display = "block"
    }else{
        modal.style.display = "none"
    }
})
ModalTopSideExitBtn.addEventListener('click',function(){
    modal.style.display = "none"
})

