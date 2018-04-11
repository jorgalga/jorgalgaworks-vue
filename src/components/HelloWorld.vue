<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <studies></studies>
    <portfolio></portfolio>
  </div>
</template>

<script>
import JggStudies from '@/components/JggStudies'
import JggPortfolio from '@/components/JggPortfolio'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Jorgalga Works site'
    }
  },
  components: {
    'studies': JggStudies,
    'portfolio': JggPortfolio
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  background-color: aliceblue;
}
h1{
  font-weight: normal;
  margin: 0;
}
</style>
