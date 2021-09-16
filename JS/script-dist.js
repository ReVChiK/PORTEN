function Switch_Bg_button(){
    
    let button_like = document.querySelector('#like');
    let button_account = document.querySelector('#personal_account');
    let button_settings = document.querySelector('#settings');

    button_like.addEventListener('click', function(){
        if(button_like.className!= 'active'){
            button_like.classList.add('active');
            button_account.classList.remove('active');
            button_settings.classList.remove('active');
        }
    })

    button_account.addEventListener('click', function(){
        if(button_account.className!= 'active'){
            button_account.classList.add('active');
            button_like.classList.remove('active');
            button_settings.classList.remove('active');
        }
    })

    button_settings.addEventListener('click', function(){
        if(button_settings.className!= 'active'){
            button_settings.classList.add('active');
            button_like.classList.remove('active');
            button_account.classList.remove('active');
        }
    })

}

Switch_Bg_button();