Vue.component('drop-bar',{
    props: ['dropdown'],
    template:'<li class="ho" onclick="{dropdown.func}">{{dropdown.title}}</li>'
})



let app = new Vue({
    el:"#main",
    data: {
        // user id = 0 (not logged in yet)(1 as admin)
        user_id: 0,
        searchInp: '',
        users: [{
            username: "admin",
            password: "admin",
            favourite_mangas:[],
            read_history:[]
        }],

        //nav dropdown
        dropped_down: false,
        //login input pass and username
        inp_lo_us:'',
        inp_lo_pa:'',

        //test area
        mieru: true,
    },
    methods: {
        main: function(){
            
        },
        login: function(){
            alert(1)
        },
        signin: function(){
            alert(2)
        },
        searchMG: function(){
            //app.searchInp = manga name
            console.log('searching for "'+app.searchInp+'"');
            app.searchInp = ''
        },
        fav_dropdown: function(){
            // favourite manga (can only toggle after logged in)
            if(this.user_id==0){
                this.login();
            }
            
        },
        dropmenu: function(){
            this.dropped_down = !this.dropped_down;
        },
        //menu
        Profile: function(){

        },
        log_out: function(){
            this.user_id = 0;
            this.dropmenu();
        },
        load_favourite: function(){

        }
    }
})