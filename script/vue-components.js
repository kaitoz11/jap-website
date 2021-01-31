Vue.component('nav-bar',{
    template:`
    
    `
})



let app = new Vue({
    el:"#main",
    data: {
        // user id = 0 (not logged in yet)(1 as admin)
        user_id:0,
        searchInp: '',

    },
    methods: {
        main: function(){

        },
        login: function(){
            alert(1)
        },
        signin: function(){
            alert(2)
        }
        ,
        searchMG: function(){
            //app.searchInp = manga name
            console.log(app.searchInp);
            app.searchInp = ''
        },
        fav: function(){
            alert(4)
        },
    }
})