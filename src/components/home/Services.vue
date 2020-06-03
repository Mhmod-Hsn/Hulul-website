<template>
	<div id="services" class="container-fluid">
		<div class="row">
			<div class="col-lg-3 col-md-6 col-sm-6 my-3" v-for="(service,index) in services" :key="index">
				<div class="img-wrapper primary-gradient">
					<img :src="service.img" :alt="service.title" class="mx-auto d-block img-fluid">
				</div>
				<h5 class="text-secondary my-3">{{service.title}}</h5>
				<p class="small font-weight-bold">{{service.subtitle}}</p>
				<div class="text-right mt-4">
					<a :href="service.moreURL" class="text-secondary small">
						{{service.moreText}}
						<i class="fa fa-angle-left" aria-hidden="true"></i>
					</a>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Services",
	  computed:{
      services(){
        return [
          {
            img:require('@/static/images/service.png'),
            title:this.$t('services.service.title'),
            subtitle:this.$t('services.service.subtitle'),
            moreText:this.$t('services.service.moreText'),
            moreURL:'#'
          },
          {
            img:require('@/static/images/service.png'),
            title:this.$t('services.service.title'),
            subtitle:this.$t('services.service.subtitle'),
            moreText:this.$t('services.service.moreText'),
            moreURL:'#'
          },
          {
            img:require('@/static/images/service.png'),
            title:this.$t('services.service.title'),
            subtitle:this.$t('services.service.subtitle'),
            moreText:this.$t('services.service.moreText'),
            moreURL:'#'
          },
          {
            img:require('@/static/images/service.png'),
            title:this.$t('services.service.title'),
            subtitle:this.$t('services.service.subtitle'),
            moreText:this.$t('services.service.moreText'),
            moreURL:'#'
          },
        ]
      }

	  }
  }
</script>

<style scoped>
#services{
	margin: 30px auto;
}
</style>