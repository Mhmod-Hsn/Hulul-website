<template>
	<div id="projects" class="container-fluid my-5">
		<h2 class="text-center text-capitalize my-3">{{$t('projects.title')}}</h2>
		<div class="row">
			<div
				class="col-lg-3 col-md-6 col-sm-6 my-3"
				v-for="(project,index) in projects"
				:key="index"
			>
				<a :href="project.url">
					<b-card class="bg-light-blue">
						<div class="img-wrapper">
							<img :src="project.img" class="img-fluid" :alt="project.name">
						</div>
						<h5 class="project-name text-center mb-1 mt-2 font-weight-bold">{{project.name}}</h5>
				</b-card>
				</a>

			</div>
		</div>
		<div class="actions text-center mt-5">
			<a href="#" class="btn btn-secondary mx-2 px-4">{{$t('actions.more')}}</a>
			<a href="#" class="mx-2 px-4">{{$t('actions.contact-us')}}</a>
		</div>

	</div>
</template>

<script>
  export default {
    name: "Projects",
	  computed:{
      projects(){
       return [
          {
            img: require('@/static/images/project.png'),
            name: this.$t('projects.project.title'),
            url: '#'
          },
          {
            img: require('@/static/images/project.png'),
            name: this.$t('projects.project.title'),
            url: '#'
          },
          {
            img: require('@/static/images/project.png'),
            name: this.$t('projects.project.title'),
            url: '#'
          },
          {
            img: require('@/static/images/project.png'),
            name: this.$t('projects.project.title'),
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
		overflow: hidden;
		.project-name{
			transition: all 0.3s ease-in-out;
			opacity: 0;
			transform: translateY(30px);
		}
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

			.project-name{
				opacity: 1;
				transform: translateY(0);
			}
		}

	}

}
</style>