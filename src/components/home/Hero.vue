<template>
	<div id="hero" class="container-fluid">
		<div class="bg-light-blue py-4">
			<div class="row">
				<div class="col-md-6">
					<div class="hero-img">
						<img :src="hero.img" class="d-block mx-auto img-fluid" :alt="hero.title">
					</div>
				</div>
				<div class="col-md-6">
					<div class="hero-text">
						<h1 class="title">{{hero.title}}</h1>
						<p class="subtitle my-4">{{hero.subtitle}}</p>
						<div class="actions">
							<a :href="hero.moreBtnURL" class="btn btn-secondary mx-2 px-4">{{hero.moreBtnText}}</a>
							<a :href="hero.contactURL" class="mx-2 px-4">{{hero.contactText}}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Hero",
	  computed:{
      hero(){
        return {
          img:require('@/static/images/hero.png'),
          title: this.$t('hero.title'),
          subtitle: this.$t('hero.subtitle'),
          moreBtnText: this.$t('actions.more'),
          moreBtnURL:'#',
          contactText:this.$t('actions.contact-us'),
          contactURL:'#'
        }
      }
	  }
  }
</script>

<style lang="scss">
#hero{
	.hero-img{
		height: 350px;
		img{
			height: 100%;
			width: auto;
		}
	}
	.hero-text{
		display: flex;
		align-items: start;
		justify-content: center;
		flex-flow: column;
		height: 100%;
		width: 80%;
	}

}
</style>