<template>
	<div id="home-slider" class="container-fluid">
		<div class="bg-light-blue">

			<VueSlickCarousel v-bind="settings">
				<div class="slide" v-for="(slide,index) in slides" :key="index">
					<div class="row">
						<div class="col-md-6">
							<div class="slide-text">
								<h1 class="title">{{slide.title}}
									<span class="text-secondary">{{slide.title2}}</span>
								</h1>
								<p class="subtitle my-4">{{slide.subtitle}}</p>
								<div class="actions">
									<a :href="slide.moreBtnURL" class="btn btn-secondary mx-2 px-4">{{slide.moreBtnText}}</a>
									<a :href="slide.contactURL" class="mx-2 px-4">{{slide.contactText}}</a>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="slide-img">
								<img src="../../assets/images/slide1.png" class="d-block mx-auto img-fluid" :alt="slide.title">
							</div>
						</div>

					</div>
				</div>

			</VueSlickCarousel>

		</div>
	</div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


  export default {
    components:{
      VueSlickCarousel
    },
    name: "Slider",
	  data(){
      return{
        settings:{
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "autoplay": true,
          arrows: true,

        },
	      slides:[
		      {
		        img:'../../assets/images/slide1.png',
			      title:'حلول تكنولوجيا متطورة',
			      title2:'نحو مستقبل أفضل',
			      subtitle:'هدفنا في حلول تيك دائماً هو العمل على حلول وأفكار متطورة بمعايير عالمية تساهم في التقدم التقني بالوطن العربي',
			      moreBtnText:'اعرف المزيد',
			      moreBtnURL:'#',
			      contactText:'تواصل معنا',
			      contactURL:'#'
		      },
          {
            img:'../../assets/images/slide1.png',
            title:'حلول تكنولوجيا متطورة',
            title2:'نحو مستقبل أفضل',
            subtitle:'هدفنا في حلول تيك دائماً هو العمل على حلول وأفكار متطورة بمعايير عالمية تساهم في التقدم التقني بالوطن العربي',
            moreBtnText:'اعرف المزيد',
            moreBtnURL:'#',
            contactText:'تواصل معنا',
            contactURL:'#'
          }
	      ]
      }
	  }
  }
</script>

<style lang="scss">
.slick-slide {
	padding-bottom: 50px;
	div {
		outline: none;
	}

	.slide-img{
		height: 350px;
		img{
			height: 100%;
			width: auto;
		}
	}
	.slide-text{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
		height: 100%;
		width: 80%;
	}
}
.slick-dots{
	bottom: 5px;

	li{
		width: 30px;
		margin: 0;

		button{
			position: relative;
			width: 25px;
			&:before{
				width: 100%;
				content: '';
				z-index: 9;
				height: 5px;
				border-radius: 3px;
				background-color: #888;
			}

		}
		&.slick-active button:before {
			background-color: var(--secondary);
		}
	}

}

.slick-prev,
.slick-next{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	z-index: 9;
	background-color: white!important;

	&:before{
		content: '\f104';
		font-weight: 700;
		font-family: 'FontAwesome';
		color: var(--primary);
		font-size: 35px;
		line-height: 1.1;
		text-align: center;
	}
}

.slick-prev {
	left: 10px;
}
.slick-next{
	right: 10px;
	transform: rotate(180deg);
}




/******************
		Animation
******************/
#home-slider {

	.slide-text *{
		opacity: 0;
		transition: all 0.3s;
	}

	.slide-text .title{
		transition-delay: 0.5s;
		transform: translateY(-30px);

	}
	.slide-text .subtitle{
		transition-delay: 1s;
		transform: translateY(-30px);
	}
	.slide-text .actions{
		transition-delay: 1.5s;
		transform: translateY(30px);
	}

	.slick-active{
		.slide-text *{
			opacity: 1;
			transform: translateY(0);
		}
	}
}

</style>