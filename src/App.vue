<template>
  <div id="app" :class="$i18n.locale">
    <Navbar/>
    <transition mode="out-in" name="fade" >
      <router-view />
    </transition>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from './components/general/Navbar'
  import Footer from './components/general/Footer'

  export default {
    components:{
      Navbar,
      Footer
    }
  }
</script>
<style lang="scss">
@import "assets/css/style.scss";

</style>
