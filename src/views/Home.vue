<template>
  <div class="home">
    <Slider/>
    <Services/>
    <Hero/>
    <Projects/>
  </div>

</template>

<script>
import Slider from './../components/home/Slider'
  import Hero from './../components/home/Hero'
  import Services from './../components/home/Services'
  import Projects from './../components/home/Projects'

export default {
  name: "Home",
  components: {
    Slider,
    Hero,
    Services,
    Projects
  }
};
</script>
