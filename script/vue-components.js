Vue.component('nav-bar',{
    template:`
        
    `
})



let app = new Vue({
    el:"#main",
    data: {
        // user id = 0 (not logged in yet)(1 as admin)
        user_id=0,
        
    },
    method: {
        main: load_main(),
        login: load_login(),
        signin: load_signin(),

    }
})