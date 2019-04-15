<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
    <div class="divisor">
    </div>
  </div>
</template>

<script>
export default {
  name: 'JggExhibitions',
  data () {
    return {
      msg: 'Where have I exhibited?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    margin: 45px auto 45px;
    max-width: 308px;
    background-color: #000000bb;
    color: white;
    transform: skewY(-5.5deg);
  }
  .divisor{
    background-color: aliceblue;
    width: 100%;
    height: 50px;
  }
</style>
