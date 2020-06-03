<template>
	<div id="footer" class="text-center bg-light-blue py-4">
		<div class="container-fluid">
			<div class="logo-footer">
				<img src="../../assets/Logo-footer.png" class="img-fluid" alt="">
			</div>

			<div class="links">
				<ul class="list-inline my-3 font-weight-bold">
					<li class="list-inline-item mx-4">
						<router-link :to="{name: 'Home',params:{'lang':$i18n.locale}}" exact>{{ $t('navbar.home') }}</router-link>
					</li>
					<li class="list-inline-item mx-4">
						<router-link :to="{name: 'About',params:{'lang':$i18n.locale}}" exact>{{ $t('navbar.about') }}</router-link>
					</li>
					<li class="list-inline-item mx-4">
						<router-link :to="{name: 'Services',params:{'lang':$i18n.locale}}" exact>{{ $t('navbar.services') }}</router-link>
					</li>
					<li class="list-inline-item mx-4">
						<router-link :to="{name: 'Projects',params:{'lang':$i18n.locale}}" exact>{{ $t('navbar.projects') }}</router-link>
					</li>
					<li class="list-inline-item mx-4">
						<router-link :to="{name: 'Contact',params:{'lang':$i18n.locale}}" exact>{{ $t('navbar.contact') }}</router-link>
					</li>
				</ul>
			</div>

			<p> {{$t('footer.copyrights')}} - {{new Date().getFullYear()}} &copy;</p>

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

<style lang="scss"  scoped>
	#footer{
		.router-link-exact-active{
			color: var(--secondary);
		}
	}
</style>