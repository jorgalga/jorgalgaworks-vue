<template>
  <div id="cmpheader" class="component-wrapper cmpheader">
    <div class="component-container">
      <div class="page-title" v-bind:style="isMobile ? 'font-size:50px' : 'font-size:'+70*1+'px'">Contacto</div>
      <p class="first">Déjanos tus datos para poder participar en futuras fases de Onesait Platform Revolution.</p>
      <div>
        <form>
          <div class="form-col">
            <label for="name" >Nombre y apellidos</label>
            <input @focus="togglePicker('form-name')" ref=form-name type="text" name="name" placeholder="" required>
          </div>
          <div class="form-col">
            <label for="company" >Empresa</label>
            <input ref=form-company type="text" name="company" placeholder="">
          </div>
          <div class="form-col">
            <label for="phone" >Teléfono</label>
            <input ref=form-phone type="tel" name="phone" placeholder="">
          </div>
          <div class="form-col">
            <label for="email" >Email</label>
            <input @focus="togglePicker('form-email')" ref=form-email type="email" name="email" placeholder="" required>
          </div>
          <div class="form-col full">
            <div class="fc-wrapper">
              <input ref="checkOK1" type="checkbox" class="check-bases">
              <label class="check-bases">ACEPTO el uso de mis datos para dar respuesta a mi solicitud.</label>
            </div>
          </div>
          <div class="form-col full">
            <div class="fc-wrapper">
              <input ref="checkOK2" type="checkbox" class="check-bases">
              <label class="check-bases">ACEPTO la cesión de mis datos a empresas del grupo Indra.</label>
            </div>
          </div>
          <div class="form-col full">
            <div class="fc-wrapper submit-w">
              <input @click.prevent="sendform()" class="submit" type="submit" v-bind:value="data.copy[clang].form_inputvalue" v-bind:style="isMobile ? '' : 'font-size:'+15*1+'px;padding: 15px '+30*1+'px'">
            </div>
          </div>
           <div class="form-col full">
             <p>Los datos de caracter personal que usted proporcione seran tratados por Indra Sistemas S.A., con CIF. nº A-28599033. La finalidad del tratamiento es la de gestionar la petición que nos realiza por medio del canal online.</p>
             <p>INDRA SISTEMAS, S.A. le informa que tiene derecho a ejercer sus derechos de acceso, rectificación, supresión, cancelación, oposoción, limitación del tratamiento y portabilidad en los términos especificados en la legislación sobre protección de datos, dirigiendose a dpo@indra.es, indicando de que canal o asunto quiere darse de baja. Para mñas información pinche aquí.</p>
           </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMP_header',
  props: ['type'],
  data () {
    return {
      scaleR: 1,
      isMobile: window.innerWidth < window.dataConfig.mobile_width,
      data: window.dataConfig,
      clang: 'es'
    }
  },
  created () {
    var _ = this
    this.clang = this.$route.name.split('loc:')[1]
    // _.resizeHandler()
    window.addEventListener('resize', function () {
      _.isMobile = window.innerWidth < _.data.mobile_width
      // _.resizeHandler()
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
    togglePicker (e) {
      this.$refs[e].classList.remove('error')
    },
    resetform () {
      this.$refs['form-email'].value = ''
      this.$refs['form-name'].value = ''
      this.$refs['form-phone'].value = ''
      this.$refs['form-company'].value = ''
    },
    sendform () {
      var _ = this
      var acopy0 = {
        es: 'El nombre y el email son campos requeridos.',
        en: 'Name and emal are required fields.'
      }
      var acopy1 = {
        es: 'Para poder registrarse debes aceptar el uso y cesión de tus datos.',
        en: 'To register you must accept the use and transfer of your data.'
      }
      var acopy2 = {
        es: 'Hemos registrado correctamente tus datos.',
        en: 'We have just stored your data.'
      }
      var acopy2err = {
        es: 'No hemos podido registrar tus datos correctamente.',
        en: 'We could not register your data correctly.'
      }
      let customevent = {}
      // console.log('send form')
      if (_.$refs['form-name'].value === '' || _.$refs['form-email'].value === '') {
        // alert(acopy0[_.clang])
        customevent = new CustomEvent('OpenPopup', {detail: acopy0[_.clang]})
        setTimeout(function () {
          document.dispatchEvent(customevent)
        }, 100)
        if (_.$refs['form-name'].value === '') {
          _.$refs['form-name'].classList.add('error')
        }
        if (_.$refs['form-email'].value === '') {
          _.$refs['form-email'].classList.add('error')
        }
        return
      }
      if (!_.$refs.checkOK1.checked || !_.$refs.checkOK2.checked) {
        // alert(acopy1[_.clang])
        customevent = new CustomEvent('OpenPopup', {detail: acopy1[_.clang]})
        setTimeout(function () {
          document.dispatchEvent(customevent)
        }, 100)
        return
      }
      var jsonvar = {
        UsuarioHackathonExterno: {
          mail: _.$refs['form-email'].value,
          name: _.$refs['form-name'].value,
          motivation: '',
          twitter: '',
          github: '',
          phoneNumber: _.$refs['form-phone'].value,
          address: '',
          company: _.$refs['form-company'].value
        }
      }
      // https://www.onesaitplatform.online/gravitee/gateway/hackathon-event/v1/external
      console.log(jsonvar)
      var xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        // console.log(this)
        let status = this.status
        if (this.readyState === 4 && status === 200) { // User allowed to register
          _.resetform()
          // alert(acopy2[_.clang])
          customevent = new CustomEvent('OpenPopup_home', {detail: acopy2[_.clang]})
          setTimeout(function () {
            document.dispatchEvent(customevent)
          }, 100)
        }
        if (this.readyState === 4 && status !== 200) {
          _.resetform()
          customevent = new CustomEvent('OpenPopup', {detail: acopy2err[_.clang]})
          setTimeout(function () {
            document.dispatchEvent(customevent)
          }, 100)
        }
      }
      xhttp.open('POST', 'https://www.onesaitplatform.online/gravitee/gateway/hackathon-event/v1/external', true)
      xhttp.setRequestHeader('X-OP-APIKey', 'd028185e6b5f481e9e1153d0babc067e')
      xhttp.setRequestHeader('Accept', 'application/json')
      xhttp.setRequestHeader('Content-type', 'application/json')
      xhttp.send(JSON.stringify(jsonvar))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_vars.scss';
@import '../scss/_fonts.scss';
.component-wrapper.cmpheader{
  width: 100%;
  background-color: $blue;
  background-color: transparent;
  transition: 1s;
  position: relative;
  z-index: 90;
  margin-top: -1px;
  @media (max-width: $break-mobile) {
    margin-top: 80px;
  }
  .component-container{
    max-width: $pagewidth;
    margin: 0 auto;
    display: block;
    text-align: center;
    min-height: 300px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .page-title{
    color: $blue;
    font-family: 'PlayfairDisplay-Regular';
    line-height: 0.9;
    text-align: left;
    max-width: $pagewidth;
    margin: 0 auto;
    box-sizing: border-box;
    margin-bottom: 60px;
    @media (max-width: $break-mobile) {
      text-align: center;
    }
  }
  p{
    font-family: 'SohoGothicPro-Regular';
    text-align: left;
    font-size: 15px;
    color: $darkblue;
    margin-bottom:  30px;
    &.first{
      @media (max-width: $break-mobile) {
        text-align: center;
      }
    }
  }
  form{
    vertical-align: top;
    font-family: 'SohoGothicPro-Regular';
    font-size: 15px;
    color: $darkblue;
    text-align: left;
    margin-bottom: 60px;
    margin-left: -40px;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    @media (max-width: $break-mobile) {
      margin-left: 0;
    }
    input{
      padding: 8px 20px;
      outline: none;
    }
    .form-col{
      width: 49.8%;
      display:inline-block;
      box-sizing: border-box;
      text-align: left;
      margin-bottom: 15px;
      @media (max-width: $break-mobile) {
        width: 100%;
        text-align: center;
      }
      &.full{
        width: 100%;
        padding-left: 16%;
        word-wrap: break-word;
        .fc-wrapper{
          &.submit-w{
            text-align: right;
          }
        }
        @media (max-width: $break-mobile) {
          padding-left: 0;
          .fc-wrapper{
            max-width: 70%;
            margin: 0 auto;
            text-align: left;
            &.submit-w{
              text-align: center;
            }
          }
        }
        input, label{
          width: initial;
          @media (max-width: $break-mobile) {
            display: inline;
          }
        }
      }
    }
    label{
      width: 33%;
      box-sizing: border-box;
      display:inline-block;
      text-align: right;
      padding-right: 15px;
      @media (max-width: $break-mobile) {
        font-size: 12px;
        width: 100%;
        text-align: center;
        margin-right: 0;
      }
    }
    input{
      width: 66.25%;
      display:inline-block;
      border: 1px solid $darkblue;
      box-sizing: border-box;
      &.error{
        border: 1px solid red;
      }
      &.submit{
        -webkit-appearance: none;
        border-radius: 0;
        background-color: white;
        color: $softblue;
        border: 1px solid $softblue;
        @media (max-width: $break-mobile) {
          background-color: $softblue;
          color: white;
        }
        @media (min-width: $break-mobile) {
          &:hover{
            background-color: $softblue;
            color: white;
            cursor: pointer;
          }
        }
      }
      @media (max-width: $break-mobile) {
        width: 70%;
      }
    }
  }
}
</style>
