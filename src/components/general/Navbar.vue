<template>
	<b-navbar toggleable="md" type="light" variant="white" fixed="top" class="container-fluid">
			<router-link :to="{name: 'Home'}" tag="b-navbar-brand" >
				<img src="./../../assets/Logo.png" alt="">
			</router-link>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<router-link exact tag="b-nav-item" :to="{name: 'Home'}">الرئيسية</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About'}">عن حلول تيك</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About'}">خدماتنا</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About'}">أعمالنا</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About'}">اتصل بنا</router-link>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<div class="login">
						<button class="btn btn-primary" @click="showLogin = !showLogin">تسجيل دخول</button>

						<transition name="slide-fade-top" mode="in-out">
							<Login v-if="showLogin"/>
						</transition>
					</div>

					<div class="search">
						<span class="icon-only mx-3 cursor-pointer" >
							<i class="fa fa-search search-btn text-secondary" @click="showSearch = !showSearch"></i>

						<transition name="slide-fade">
							<b-nav-form  class="ml-1" v-if="showSearch">
								<b-form-input placeholder="كلمة البحث"></b-form-input>
							</b-nav-form>
						</transition>
						</span>
					</div>

					<div class="nav-item lang-switcher">
						<span class="nav-link h6 font-weight-bold mb-0">English</span>
					</div>

				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
</template>

<script>
	import Login from './../general/Login'

	export default {
	  components:{
	    Login
	  },
		data(){
		  return {
		    showSearch: false,
		    showLogin: false,

		  }
		}
	}
</script>

<style>

</style>