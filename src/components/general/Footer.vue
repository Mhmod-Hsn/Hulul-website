<template>
	<div id="footer" class="text-center bg-light-blue py-4">
		<div class="container-fluid">
			<div class="logo-footer">
				<img src="../../assets/Logo-footer.png" class="img-fluid" alt="">
			</div>

			<div class="links">
				<ul class="list-inline my-3 font-weight-bold">
					<li class="list-inline-item mx-4">
						<router-link :to="{name: 'Home'}" exact>الرئيسية</router-link>
					</li>
					<li class="list-inline-item mx-4">
						<router-link :to="{name: 'About'}" exact>عن حلول تيك</router-link>
					</li>
					<li class="list-inline-item mx-4">
						<a href="#">خدماتنا</a>
					</li>
					<li class="list-inline-item mx-4">
						<a href="#">أعمالنا</a>
					</li>
					<li class="list-inline-item mx-4">
						<a href="#">اتصل بنا</a>
					</li>
				</ul>
			</div>

			<p>جميع الحقوق محفوظة لشركة حلول تيك - {{new Date().getFullYear()}} &copy;</p>

			<div class="social">
				<ul class="list-inline mt-4 font-weight-bold">
					<li class="list-inline-item mx-4">
						<a href="#">
							<i class="fa fa-facebook-f fa-2x"></i>
						</a>
					</li>
					<li class="list-inline-item mx-4">
						<a href="#">
							<i class="fa fa-twitter fa-2x"></i>
						</a>
					</li>
					<li class="list-inline-item mx-4">
						<a href="#">
							<i class="fa fa-instagram fa-2x"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Footer",
	  data(){
      return{

      }
	  }
  }
</script>

<style  scoped>

</style>