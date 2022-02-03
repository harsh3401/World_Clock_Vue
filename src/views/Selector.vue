<template>
  <form @submit.prevent="getData()">
      <label>Select a city from the list</label>
  <select @change="onChange($event)">
          <option :key="city.id" v-for="city in cities" :v-model="city" :value="city.name">{{city.name}}</option>
  </select>
  <button >Look at the time</button>
  <Time />
  </form>
</template>

<script>

export default {
    data()
    {
        return{cities:[{queryString:'Asia/Kolkata',name:'Kolkata',id:1},{queryString:'America/Puerto_Rico',name:'Puerto Rico',id:2},{queryString:'America/New_York',name:'New_york',id:3},{queryString:'Europe/London',name:'London',id:4}],selected:'',time:''}
    },
    methods:{
    onChange(e)
    {
        this.selected=e.target.value
        console.log(this.selected)
    },
    async getData() {
      try {
   let val=     this.cities.find(function(city, index) {
	if(city.name == this.selected)
		return true;
});
        let response = await fetch("http://worldtimeapi.org/api/timezone/"+val.queryString);
        this.time = await response.json();;
        console.log(this.time.datetime)
      } catch (error) {
        console.log(error);
      }
    }}

}
</script>

<style>

</style>