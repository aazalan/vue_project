<template>
    <div class="login">
      <h1>Login page</h1>

      <div>
          <input type="text" placeholder="Username" v-model="username">
          <br>
          <input type="password" placeholder="Password" v-model="password">
          <br>
          <input type="submit" value="log in" v-on:click="login">
      </div>

      <a>username - {{ username }}, password - {{ password }}</a>
    </div>
  </template>
  
<script>
    export default {
        name: 'LoginComponent',
        data: function() {
            return {
                password: '',
                username: ''
            }
        },
        methods: {
            login() {
                let json = JSON.stringify({
                    password: this.password,
                    username: this.username
                    });
                console.log(json);
                let xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/login');
                xhr.responseType = 'json';
                xhr.send(json);

                xhr.onload = function() {
                    if (xhr.status != 200) {
                        const response = xhr.response;
                        this.message = response;
                    } else {
                        this.$router.push({name: 'home'});
                    }
                }
            }
        }
    }
</script>

  <style>
  @media (min-width: 2000px) {
    .login {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>