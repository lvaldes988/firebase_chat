function navigate(screen) {
    

    switch (screen) {
        case 'loading-screen':
        mountLoadingScreen();
        break;

        case 'login-screen':
        mountLoginScreen();
        break;

        case 'singup-screen':
        mountSingUpScreenScreen();
        break;

        case 'chat-screen':
        mountChatScreen();
        break;



        default:
        break;
    }
}