let app = new Vue({
    el:"#main",
    data: {
        // user id = 0 (not logged in yet)(1 as admin)
        user_id: 0,
        searchInp: '',
        users: [{
            username: "admin",
            password: "admin",
            favourite:[],
            search_history:[]
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
        container: true,
        footer: true,
        show_Kanji: true,
        //test area
        // datas
        
        //searching
        drop_stype: false,
        search_typeID: 0,
        search_type: ['kanji','reading','words'], // 0 is kanji, 1 is reading, 2 is words
    },
    methods: {
        allComponentsOff: function(){
            //must include all components
            this.login_signin = false;
            this.nav_bar = false;
            this.container= false;
            this.footer =false;
            this.drop_stype=false;
            // document.getElementById("left").innerHTML ='';
            // document.getElementById("right").innerHTML ='';
        },
        main: function(){
            this.allComponentsOff();
            this.nav_bar = true;
            this.container= true;
            this.footer =true;
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
            //app.searchInp
            this.main()
            console.log('searching for "'+this.searchInp+'"');
            if(!isJap(this.searchInp)|| this.searchInp.length==0){
                console.log("Not found - not japanese")
                document.getElementById("left").innerHTML ='<h1>No result found</h1>';
                return 0
            }
            if(this.search_typeID==0){
                getAPI(usingAPI+this.search_type[0]+"/"+this.searchInp[0]).then(data1 => {load_Kanji(data1)})
                getAPI(usingAPI+this.search_type[2]+"/"+this.searchInp[0]).then(data2 => {load_Words(data2)})
            }else{
                temp_Data=[]
                getAPI(usingAPI+this.search_type[this.search_typeID]+"/"+this.searchInp).then(data => {
                    for(let j=0;j<data.main_kanji.length;j++){
                        getAPI(usingAPI+this.search_type[0]+"/"+data.main_kanji[j]).then(datA => {
                            temp_Data.push(datA)
                            return 0
                        })
                    }
                    load_readings(data);
                })
                
            }
        },
        fav_dropdown: function(){
            // favourite manga (can only toggle after logged in)
            if(this.user_id==0){
                this.login();
            }
            
        },
        Drop_stype: function(a){
            //done
            this.search_typeID=a
            this.drop_stype=!this.drop_stype
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
                for(let i=0;i<this.users.length;i++){
                    if(this.inp_lo_us == this.users[i].username && this.inp_lo_pa == this.users[i].password){
                        this.user_id = i+1;
                        this.main();
                        this.inp_lo_pa = '';
                        return 0;
                    }
                }
                alert('Log in failed! Try again!');

            }else{
                //sign in
                if(this.inp_si_pa != this.inp_si_pa_co && this.inp_si_us!='' && this.inp_si_pa_co!=''&&this.inp_si_pa!=''){
                    this.inp_si_pa = '';
                    this.inp_si_pa_co = '';
                    alert("Sign in failed! Try again!")
                    return 0
                }
                for(let a=0;a<this.users.length;a++){
                    if(this.inp_si_us == this.users[a].username){
                        this.inp_si_pa = '';
                        this.inp_si_pa_co = '';
                        alert("Account already exist! Try another username.");
                        return 0
                    }
                }                
                this.users.push({
                    username: this.inp_si_us,
                    password: this.inp_si_pa,
                    favourite:[],
                    search_history:[]
                });
                this.signin();
                this.inp_si_pa = '';
                this.inp_si_pa_co = '';
                this.inp_si_us = '';
            }
            
        }
    }
})