<template>
<div class="logindiv">
    <form enctype="application/x-www-form-urlencoded" @submit.prevent="submitLogin">
        <img class="loginlogo" src="../assets/logo.png" alt="logo.png">
        <input type="email" placeholder="Email" v-model="email" required><br>
        <input type="password" placeholder="Password" v-model="password" required>
        <button><b>Login</b></button>
        <p>Don't have an account?</p>
        <router-link to="/signup"><button><b>Sign Up</b></button></router-link> 
    </form>
</div>
    
</template>

<script>
import router from '@/router';
import API from '../api';
import { ref } from 'vue';

export default {
    setup() {
        const email = ref(null);
        const password =  ref(null);
        const users = ref(null);

        const getAllUser = async () => {
            try{
                let data = await API.getAllUser();
                users.value = await data;
            }
            catch(err){
                console.log(err)
            }
                
        }
        getAllUser()

        const submitLogin = () => {
            try{
                for(let i=0; i<users.value.length; i++){
                    if(email !== undefined || password !== undefined){
                        if(users.value[i].email == email.value && users.value[i].password == password.value){
                            console.log(users.value[i]);
                            console.log("makalogin ka");
                            router.push({name: "Home"});
                            break;
                        }
                        else if(i==users.value.length-1){
                            console.log("dle");
                        }
                    }
                    
                }
            }
            catch(err){
                console.log(err)
            }
            
             
        }
        
        
        return{ email, password, submitLogin }
    }
    
}
</script>

<style scoped>
    .logindiv {
        max-width: 600px;
        height: 700px;
        margin: 100px auto;
        background: rgb(80, 112, 80);
        border-radius: 10px;
    }

    form {
        max-width: 400px;
        max-height: 600px;
        margin: 110px auto;
        text-align: center;
        background: rgb(167, 238, 167);
        padding: 40px;
        border-radius: 10px;
        display: inline-block;
        box-shadow: 5px 10px #888888;
    }

    input {
        font-size: 15px;
        width: 350px;
        padding: 10px;
        margin: 10px auto;
        border-radius: 10px;
        border-style: none;
        color: rgb(75, 75, 75);
        border-color: aquamarine;
    }

    button {
        width: 100px;
        color: #ffffffe1;
        font-size: 15px;
        padding: 10px;
        margin-top: 20px;
        border-style: none;
        background: grey;
        border-color: aquamarine;
        border-radius: 20px;
    }
    p {
        color:#686868e1;
        margin-bottom: -10px;
        padding-bottom: -10px;
        font-size: 15px;
    }

    .loginlogo {
        width: 200px;
        margin: 10px auto;
        border-radius: 10px;
    }
</style>