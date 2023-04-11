<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
    <button v-on:click="changeMessage">Change</button>
    <input type="text" v-model="message">
    <button v-on:click="getInput">get</button>
</template>

<script>
    export default {
        name: 'TrainComponent',
        data: function() {
            return {
                message: 'this is component'
            }
        },
        methods: {
            changeMessage() {
                this.message = 'this is another message'
            },
            getInput() {
                
            }
        }
    }
</script>