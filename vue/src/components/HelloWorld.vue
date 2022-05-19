<script >


import {mapState} from "vuex"

export default {
  computed : {
    ...mapState(['user'])
  }
}
</script>

<template>
  <h1>Hello</h1>
  <h1 class="text-3xl font-bold underline text-gray-300">
    Hello world!
  </h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
