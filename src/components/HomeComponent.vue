<template>
    <div class="card">
    <div v-if="username">
        <h2>User - {{ username }}</h2>
        <p>User ID - {{ id }}</p>
        <p>About user: </p>
        <p>{{ about }}</p>
        <img v-bind:src="avatar">
    </div>
    <div v-else>
        <p>Вы не авторизованы</p>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeComponent',
        data: function() {
            return {
                id: this.$route.query.id,
                username: this.$route.query.username,
                avatar: this.$route.query.avatar,
                about: this.$route.query.about,
                //dataIsSet: this.isSet()
            }
        }
    }
</script>

<style>
@media (min-width: 2000px) {
  .card {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>