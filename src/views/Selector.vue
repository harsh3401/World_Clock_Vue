<template>
  <form @submit.prevent="handleSubmit">
      <label>Select a city from the list</label>
  <select >
          <option :key="city.id" v-for="city in cities" :v-model="city" :value="city.name">{{city.name}}</option>
  </select>
  <button  >Look at the time</button>
  </form>
</template>

<script>
export default {
    data()
    {
        return{cities:[{name:'Mumbai',id:1},{name:'Spain',id:2},{name:'Paris',id:3},{name:'London',id:4}]}
    }

}
</script>

<style>

</style>