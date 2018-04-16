<template>
  <div class="hello">
    <h1>{{ msg }} - {{ id }}</h1>
    <studies></studies>
    <portfolio :id="id"></portfolio>
    <exhibitions></exhibitions>
  </div>
</template>

<script>
import JggStudies from '@/components/JggStudies'
import JggPortfolio from '@/components/JggPortfolio'
import JggExhibitions from '@/components/JggExhibitions'

export default {
  name: 'HelloWorld',
  props: ['id'],
  data () {
    return {
      msg: 'Welcome to Jorgalga Works site'
    }
  },
  components: {
    'studies': JggStudies,
    'portfolio': JggPortfolio,
    'exhibitions': JggExhibitions
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  background-color: black;
}
h1{
  font-weight: normal;
  margin: 0;
  color: white
}
</style>
