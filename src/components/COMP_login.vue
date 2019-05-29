<template>
  <div class="component-wrapper login">
    <div class="component-container">
      <form @submit.prevent="login">
        <input v-model="user" type="text" placeholder="User">
        <input v-model="pass" type="password" placeholder="Pass">
        <input type="submit" value="Access">
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'CMP_login',
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      user: '',
      pass: ''
    }
  },
  created () {
    var _ = this
    _.data = window.dataConfig
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      _.resizeHandler()
    })
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(this.data.mobile_width / this.data.max_width, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    login () {
      let _ = this
      firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
        .then(function (user) {
          // alert(user)
          _.$router.replace('dashboard')
        })
        .catch(function (error) {
          if (error) {
            console.log(error)
          }
          // Handle Errors here.
          // var errorCode = error.code
          // var errorMessage = error.message
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.login{
  width: 100%;
  // width: calc(100% - 17px);
  position: relative;
  background-color: pink;
  display: inline-block;
  bottom: 0;
  left: 0;
  transition: 1s;
  &.hidden{
    transform: translate3d(0,100%,0)
  }
  .component-container{
    background-color: white;
    position: relative;
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: 100vh;
    form{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0) scale(2);
      margin: 0 auto;
      padding: 50px;
      background-color: aliceblue;
      width: 20%;
      @media (max-width: $break-mobile) {
        width: 60%;
      }
      input{
        text-align: center;
        display: block;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid grey;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
