<template>
  <h2 >The time will appear here</h2>
  <button @click="handleSubmit" >In a different city ? See the time here </button>
</template> 

<script>


export default {
  data()
  {
    return{time:'',qs:''}
  },
  methods:{handleSubmit(){
    this.$router.go(-1)
  },
  }


}
</script>

<style>

</style>