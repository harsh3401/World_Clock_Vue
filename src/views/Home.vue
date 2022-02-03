<template>
  <div class="home">
  <h1>Welcome to the World Clock Web App</h1>
  <button @click="handlePress">Click here to get started</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
methods:{handlePress(){
  this.$router.push({name:'SelectCity'})
}}
}
</script>
