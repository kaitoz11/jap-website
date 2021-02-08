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
        //sigin input pass and username
        inp_si_us:'',
        inp_si_pa:'',
        inp_si_pa_co:'',
        //components
        login_signin: false,
        nav_bar: true,
        ls_switcher: true,
        
        //test area
        
    },
    methods: {
        allComponentsOff: function(){
            //must include all components
            this.login_signin = false;
            this.nav_bar = false;

        },
        main: function(){
            this.allComponentsOff();
            this.nav_bar = true;
        },
        login: function(){
            // done
            this.allComponentsOff();
            this.login_signin = true;
            this.ls_switcher = true
        },
        signin: function(){
            // done
            this.ls_switcher = !this.ls_switcher;
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
            // done
            this.dropped_down = !this.dropped_down;
        },
        //menu
        Profile: function(){

        },
        log_out: function(){
            // done
            this.user_id = 0;
            this.dropmenu();
            this.main()
        },
        load_favourite: function(){

        },
        ls_submit: function(){
            if(this.ls_switcher){
                //log in
                
            }else{
                //sign in 
            }   
        }
    }
})