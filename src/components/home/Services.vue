<template>
	<div id="services" class="container-fluid">
		<div class="row">
			<div class="col-lg-3 col-md-6 col-sm-12" v-for="(service,index) in services" :key="index">
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
	  data(){
      return{
        services:[
          {
            img:require('@/static/images/service.png'),
            title:'أنظمة الشبكات والاتصالات',
            subtitle:'نوفر جميع خدمات الجهد المنخفضة والشبكات والسنترالات والأنظمة الصوتية',
            moreText:'مزيد من المعلومات',
            moreURL:'#'
          },
          {
            img:require('@/static/images/service.png'),
            title:'أنظمة الشبكات والاتصالات',
            subtitle:'نوفر جميع خدمات الجهد المنخفضة والشبكات والسنترالات والأنظمة سيب سيب سيب سيب يسب سيب يشسب شسيب شب الصوتية',
            moreText:'مزيد من المعلومات',
            moreURL:'#'
          },
          {
            img:require('@/static/images/service.png'),
            title:'أنظمة الشبكات والاتصالات',
            subtitle:'نوفر جميع خدمات الجهد المنخفضة والشبكات والسنترالات والأنظمة الصوتية',
            moreText:'مزيد من المعلومات',
            moreURL:'#'
          },
          {
            img:require('@/static/images/service.png'),
            title:'أنظمة الشبكات والاتصالات',
            subtitle:'نوفر جميع خدمات الجهد المنخفضة والشبكات والسنترالات والأنظمة الصوتية',
            moreText:'مزيد من المعلومات',
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