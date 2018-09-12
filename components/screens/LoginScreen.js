function mountLoginScreen() {
    $('#root').html(LoginScreen());

}

function LoginScreen() {
    let container = document.createElement('div');
    container.id = 'login-screen';
    container.classList.add('login-screen');
    container.innerHTML = `
 
    
    
    `;


    return container;

}