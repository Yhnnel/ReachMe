<template>
  <div class="signupdiv">
    <form enctype="application/x-www-form-urlencoded" @submit.prevent="submitSignUp">
        <img class="signuplogo" src="../assets/logo.png" alt="logo.png">
        <input type="text" placeholder="Firstname" v-model="fname" required><br>
        <input type="text" placeholder="Middlename" v-model="mname"><br>
        <input type="text" placeholder="Lastname" v-model="lname" required><br>
        <label for="bday"> Birthday: </label><input type="date" placeholder="Birthday" v-model="bday" class="hasLabel" required><br>
        <label for="bday"> Gender: </label><select name="gender" v-model="gender" class="hasLabel" required>    
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
        </select><br>
        <input type="tel" placeholder="Phone number" v-model="pnum"><br>
        <input type="email" placeholder="Email" v-model="email" required><br>
        <input type="password" placeholder="Password" v-model="pass" required><br>
        <input type="password" placeholder="Confirm password" v-model="confpass" required>
        <button><b>Sign Up</b></button>
        <p>Already have an account?</p>
        <router-link to="/login"><button><b>Log in</b></button></router-link> 
    </form>
</div>
</template>

<script>
import router from '@/router';
import API from '../api';
import { ref } from 'vue';

export default {
    setup() {
        const users = ref(null)
        const updatedUsers = ref(null)
        const userData = ref(null)
        const fname = ref(null)
        const mname = ref(null)
        const lname = ref(null)
        const bday = ref(null)
        const gender = ref(null)
        const pnum = ref(null)
        const email = ref(null)
        const pass = ref(null)
        const confpass = ref(null)

        /*
        const getUserData = async () => {
            try{   
                let Fname = fname.value;
                let Mname = mname.value;
                let Lname = lname.value;
                let Pass = pass.value;
                let Bday = bday.value;
                let Gender = gender.value;
                let Email = email.value;
                let Pnum = pnum.value; 

                let data = {
                    firstname: fname,
                    middlename: mname,
                    lastname: lname,
                    password: confpass,
                    birthday: bday,
                    gender: gender,
                    email: email,
                    phonenumber: pnum,
                }
                userData.value = await data;
            }
            catch(err){
                console.log(err)
            }
                
        }
        getUserData()
        */

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
        const submitSignUp = async () => {
            console.log(users.value)
            let Fname = fname.value;
            let Mname = mname.value;
            let Lname = lname.value;
            let Pass = pass.value;
            let Bday = bday.value;
            let Gender = gender.value;
            let Email = email.value;
            let Pnum = pnum.value;  
            try{
                let isEmailUsed = false;
                let isPassMatched = false;
                let userId = null;

                for(let i=0; i<users.value.length; i++){
                    if(email !== undefined){
                        if(users.value[i].email == email.value){
                            console.log("email already in use");
                            isEmailUsed = true;
                            break;
                        }
                    }
                }
                if(pass.value == confpass.value){
                    isPassMatched = true;
                }
                else{
                    console.log("password doesn't match")
                }
                if(!isEmailUsed && isPassMatched){
                    let data = {
                        firstname: Fname,
                        middlename: Mname,
                        lastname: Lname,
                        password: Pass,
                        birthday: Bday,
                        gender: Gender,
                        email: Email,
                        phonenumber: Pnum,
                    }
                    userData.value = await data;
                    console.log(userData.value)
                    const res = await API.createUser(userData.value)
                    let updatedData = await API.getAllUser();
                    updatedUsers.value = await updatedData;
                    console.log(updatedUsers.value)
                    for(let i=0; i<updatedUsers.value.length; i++){
                        if(email !== undefined){
                            if(updatedUsers.value[i].email == email.value){
                                userId = updatedUsers.value[i]._id.toString();
                                break;
                            }
                        }
                    }
                    console.log(userId);
                    router.push({name: "Home"}); 
                }
            }
            catch(err){
                console.log(err)
            }
        }

        return { fname, mname, lname, bday, gender, pnum, email, pass, confpass, userData, submitSignUp };        
    }
}
</script>

<style scoped>
    .signupdiv {
        max-width: 600px;
        height: 900px;
        margin: 20px auto;
        background: rgb(80, 112, 80);
        border-radius: 10px;
    }

    form {
        max-width: 400px;
        max-height: 750px;
        margin: 30px auto;
        text-align: center;
        background: rgb(167, 238, 167);
        padding: 40px;
        border-radius: 10px;
        display: inline-block;
        box-shadow: 5px 10px #888888;
    }

    select {
        font-size: 15px;
        width: 370px;
        padding: 10px;
        margin: 10px auto;
        padding-right: 50px;
        border-radius: 10px;
        color: rgb(75, 75, 75);
        border-style: none;
        border-color: aquamarine;
    }

    input {
        font-size: 15px;
        width: 350px;
        padding: 10px;
        margin: 10px auto;
        border-radius: 10px;
        color: rgb(75, 75, 75);
        border-style: none;
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

    .signuplogo {
        width: 200px;
        margin: 10px auto;
        border-radius: 10px;
    }

    label{
        color: rgb(75, 75, 75);
    }
    option{
        color: rgb(75, 75, 75);
    }
    input.hasLabel{
        width: 280px;
    }
    select.hasLabel{
        width: 305px;
    }
</style>