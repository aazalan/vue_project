<template>
    <div class="register">
      <h1>Registration page</h1>
      
      <div>
          <input type="text" placeholder="Username" v-model="username">
          <br>
          <input type="password" placeholder="Password" v-model="password">
          <br>
          <input type="submit" value="log in" v-on:click="login">
      </div>

      <a>username - {{ username }}, password - {{ password }}</a>
      <a>{{ message }}</a>
    </div>
  </template>
  
<script>
  export default {
      name: 'LoginComponent',
      data: function() {
          return {
              password: '',
              username: '',
              message: ''
          }
      },
      methods: {
          login() {
            let json = JSON.stringify({
                    password: this.password,
                    username: this.username
                    });

            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8080/register');
            xhr.responseType = 'json';
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(json);

            xhr.onload = function() {
                if (xhr.status != 200) {
                    const response = xhr.response;
                    this.message = response;
                } else {
                    const response = xhr.response;
                    this.message = response.message;
                }
            }

        }
    }
  }
</script>

  <style>
  @media (min-width: 2000px) {
    .register {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>