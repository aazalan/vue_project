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

      <!-- <a>username - {{ username }}, password - {{ password }}</a> -->
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

                fetch('http://localhost:8080/register', {
                method: 'POST', 
                body: json, 
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then(function (response) {
                    return response.json();
                    }.bind(this))
                .then(function (data) {
                    if (Object.hasOwn(data, 'error')) {
                        this.message = data.error;
                    }
                    if (Object.hasOwn(data, 'message')) {
                        this.message = data.message;
                    }
                }.bind(this));
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