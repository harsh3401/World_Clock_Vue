
<template>
  <form @submit.prevent="getData()">
      <label>Select a city from the list</label>
  <select @change="onChange($event)">
          <option :key="city.id" v-for="city in cities" :v-model="city" :value="city.queryString">{{city.name}}</option>
  </select>
  <button >Look at the time</button>
  <div>
    <h2 >{{time.datetime}}</h2>
  <button @click="handleSubmit" >In a different city ? See the time here </button>
  </div>

  </form>
</template>

<script>


export default {
    data()
    {
        return{cities:[{queryString:'Asia/Kolkata',name:'Kolkata',id:1},{queryString:'America/Puerto_Rico',name:'Puerto Rico',id:2},{queryString:'America/New_York',name:'New_york',id:3},{queryString:'Europe/London',name:'London',id:4}],selected:'',time:'',generated:false}
    },
    methods:{handleSubmit(){
    this.$router.go(-1)
  },
    onChange(e)
    {
        this.selected=e.target.value
        console.log(this.selected)
    },
    async getData() {
      try {
 
        let response = await fetch("http://worldtimeapi.org/api/timezone/"+this.selected);
        this.time = await response.json();;
        console.log(this.time.datetime)
        this.generated=true
      } catch (error) {
        console.log(error);
      }
    }}

}
</script>

<style>

</style>