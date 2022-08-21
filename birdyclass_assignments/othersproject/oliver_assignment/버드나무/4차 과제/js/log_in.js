function tryingLogin(){
    const sample_id = 'sample@sample.com';
    const sample_pw = 'sample';
    const id = document.querySelector('.id-input');
    const password = document.querySelector('.password-input');
    const wrong_id = document.querySelector('.wrong-id');
    const wrong_pw = document.querySelector('.wrong-password');

    if(id.value.length > 0 && password.value.length > 4)
    {
        if(id.value !== sample_id)
        {
            wrong_id.style.display = 'flex';
            wrong_pw.style.display = 'none';
        }
        else if(password !== sample_pw)
        {
            wrong_id.style.display = 'none';
            wrong_pw.style.display = 'flex';
        }
        else
        {
            alert('로그인')
        }
    }
    else
    {
        /* */
    }
}

function unlockLogin(){
    const id = document.querySelector('.id-input');
    const password = document.querySelector('.password-input');
    const login_btn = document.querySelector('.login-btn');
    console.log("작동함");
    if(id.value.length > 0 && password.value.length > 4)
    {
        
        login_btn.style.backgroundColor = '#0095f6';
        login_btn.style.cursor = 'pointer';
    }
    else
    {
        login_btn.style.backgroundColor = 'rgba(0, 149, 246, 0.3)';
        login_btn.style.cursor = 'default';
    }
}

const id = document.querySelector('.id-input');
const password = document.querySelector('.password-input');

id.addEventListener('keydown',unlockLogin);
password.addEventListener('keydown',unlockLogin);

const login_btn = document.querySelector('.login-btn');

login_btn.addEventListener('click',tryingLogin);
