var newMemberAddBtn = document.querySelector('.addmMemberBtn'),
    darkBg = document.querySelector('.dark_bg'),
    popupForm = document.querySelector('.popup'),
    crossBtn = document.querySelector('.closeBtn')



    newMemberAddBtn.addEventListener('click',()=>{
       
        darkBg.classList.add('active')
        popupForm.classList.add('active')
    })
    
    // cette partie nous fais quitter quand le popup est ouvert pour retourner dans la page respective
        crossBtn.addEventListener('click', ()=>{
        darkBg.classList.remove('active')
        popupForm.classList.remove('active')
        form.reset()
    })
    