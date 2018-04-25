<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
    <h2>{{ name }} <br><span>a.k.a {{ alias }}</span></h2>
    <img src="/static/avatar.jpg">
    <h3>{{ jobTitle }} <br> {{ currentPos }} </h3>
    <p v-html="message"></p>
    <div class="divisor">
    </div>
  </div>
</template>

<script>
export default {
  name: 'JggAbout',
  data () {
    return {
      msg: 'Who am I?',
      name: 'Jorge Gálvez Gabarda',
      alias: 'jorgalga',
      jobTitle: 'Creative developer',
      currentPos: 'Ogilvy and Mather / Freelancer',
      message: 'Creative developer and researcher on New Media. Expertise in development of hypermedia projects, digital media integration, audiovisual communication and software engineering. Currently working as Creative Front End Developer at Ogilvy and Mather and as a freelancer.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .divisor{
    background-color: aliceblue;
    width: 100%;
    height: 50px;
  }
  img {
    width: 200px;
    height: auto;
    clip-path: polygon(0 20px, 100% 0, 100% calc(100% - 20px), 0 100%);
  }
  h1{
    margin: 45px auto 45px;
    max-width: 308px;
    background-color: #000000bb;
    color: white;
    transform: skewY(-5.5deg);
  }
  h2 span{
    transform: skew(-10deg);
    display: inline-block;
  }
  p {
    width: 40%;
    margin: 0 auto;
    margin-bottom: 15px;
  }
</style>
