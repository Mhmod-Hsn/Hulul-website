<template>
	<div id="projects" class="container-fluid my-5">
		<h2 class="text-center text-capitalize my-3">أحدث الأعمال التي نفتخر بها</h2>
		<div class="row">
			<div
				class="col-lg-3 col-md-6 col-sm-12"
				v-for="(project,index) in projects"
				:key="index"
			>
				<a :href="project.url">
					<b-card class="bg-light-blue">
						<div class="img-wrapper">
							<img :src="project.img" class="img-fluid" :alt="project.name">
						</div>
						<h5 class="text-center mb-1 mt-2 font-weight-bold">{{project.name}}</h5>
				</b-card>
				</a>

			</div>
		</div>
		<div class="actions text-center mt-5">
			<a href="#" class="btn btn-secondary mx-2 px-4">اعرف المزيد</a>
			<a href="#" class="mx-2 px-4">اتصل بنا</a>
		</div>

	</div>
</template>

<script>
  export default {
    name: "Projects",
	  data(){
      return{
        projects:[
          {
            img: require('@/static/images/project.png'),
            name: 'تطبيق فندقي',
            url: '#'
          },
          {
            img: require('@/static/images/project.png'),
            name: 'تطبيق فندقي',
            url: '#'
          },
          {
            img: require('@/static/images/project.png'),
            name: 'تطبيق فندقي',
            url: '#'
          },
          {
            img: require('@/static/images/project.png'),
            name: 'تطبيق فندقي',
            url: '#'
          },
        ]
      }
	  }
  }
</script>

<style lang="scss" scoped>
#projects{
	.card {
		border: 1px solid transparent;
		transition: all 0.3s ease-in-out;

		.img-wrapper {
			background: #fff;
			border-radius: 40px;
			padding: 20px;

			img {
				display: block;
				margin: auto;
				height: 150px;
			}
		}

		&:hover{
			border-color: var(--secondary);
		}

	}

}
</style>