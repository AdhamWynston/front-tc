<template>
    <div align="center">
    <div class="row">
    <h5 class="indigo-text">Por favor, insira seus dados</h5>
    <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
                <div class='row'>
                    <div class='col s12'>
                    </div>
                </div>

                <div class='row'>
                    <div class='input-field col s12'>
                        <input v-model="email" class='validate' type='email' name='email' id='email' />
                        <label for='email'>Enter your email</label>
                    </div>
                </div>

                <div class='row'>
                    <div class='input-field col s12'>
                        <input v-model="password" class='validate' type='password' name='password' id='password' />
                        <label for='password'>Enter your password</label>
                    </div>
                    <label style='float: right;'>
                        <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
                    </label>
                </div>

                <br />
                <div>
                    <div class='row'>
                        <button @click="login" class='col s12 btn btn-large waves-effect blue-grey darken-4'>Login</button>
                    </div>
                </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
    data (){
        return {
            email: '',
            password: ''
        }
    },
        methods: {
        login (){
            var data = {
                client_id: 2,
                client_secret: '9r4IIwuTeUL6vY4a9jTT1E6xwYtAvRpUA5pOOLv7',
                grant_type: 'password',
                username: this.email,
                password: this.password
            }
            this.$http.post("http://127.0.0.1:8000/oauth/token", data)
                .then(response => {
                    this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                    this.$router.push("/home")
                })
//                .then(function (response) {
//                    console.log(response)
//                })
    }
    }
    }
</script>

<style>
    body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }

    body {
        background: #fff;
    }

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
        color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
        border-bottom: 2px solid #e91e63;
        box-shadow: none;
    }
</style>