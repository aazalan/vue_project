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
                

                fetch('http://localhost:8080/login', {
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
                    if (data.error !== null) {
                        this.message = data.error;
                    }

                    if (data.error === null) {
                        fetch('http://localhost:8080/about', {
                            method: 'GET',
                            headers: {
                                'Authorization' : `Bearer ${data.token}`
                            }
                        })
                        .then(function (response) {
                            return response.json();
                            }.bind(this))
                        .then(function(data) {
                            if (Object.hasOwn(data, 'message')) {
                                this.message = data.message;
                            } 
                            else {
                                const user = data.data;
                                this.$router.push({
                                name: 'home',
                                query: {
                                    id: user.id,
                                    username: user.username,
                                    avatar: user.avatar,
                                    about: user.about
                                    }
                                });
                            }
                        }.bind(this));

                       
                    }
                }.bind(this));
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