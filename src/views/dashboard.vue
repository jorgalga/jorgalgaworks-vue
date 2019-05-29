<template>
  <div ref="page" class="page">
    <h1>DASHBOARD</h1>
    <a href="#" @click="logout">Logout</a>
    <p>You are logged</p>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'Dashboard',
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig
    }
  },
  beforeCreate () {
  },
  created () {
    var _ = this
    _.resizeHandler()
    window.addEventListener('resize', function () {
      _.resizeHandler()
      _.isMobile = window.innerWidth < _.data.mobile_width
    })
  },
  components: {
  },
  mounted () {
  },
  methods: {
    resizeHandler () {
      var w = Math.min(window.innerWidth, this.data.max_width)
      this.scaleR = Math.max(0.5, w / this.data.max_width)
      this.scaleR = Math.min(this.scaleR, (this.data.max_width_limit / this.data.max_width))
    },
    logout () {
      firebase.auth().signOut().then(() => this.$router.replace('login'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
.page{
  h1, p, a{
    font-family: 'SohoGothicPro-Medium';
    color:  white;
    font-size: 36px
  }
  a{
    color: green;
  }
}
</style>
