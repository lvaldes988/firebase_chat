function session(){
    if (window.user) {
        //mount the chat
        navigate('chat-screen');
    } else {
        //mount th login
        navigate('login-screen');
    }
}