<template>
	<b-navbar toggleable="md" type="light" variant="white" fixed="top" class="container-fluid">
			<router-link :to="{name: 'Home'}" class="cursor-pointer" tag="b-navbar-brand" >
				<img src="./../../assets/Logo.png" alt="">
			</router-link>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<router-link exact tag="b-nav-item" :to="{name: 'Home'}"> {{ $t('navbar.home') }}</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About'}">{{ $t('navbar.about') }}</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About'}">{{ $t('navbar.services') }}</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About'}">{{ $t('navbar.projects') }}</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About'}">{{ $t('navbar.contact') }}</router-link>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<div class="login">
						<button class="btn btn-primary" @click="showLogin = !showLogin">{{ $t('authentication.login') }}</button>

						<transition name="slide-fade-top" mode="in-out">
							<Login v-if="showLogin"/>
						</transition>
					</div>

					<div class="search">
						<span class="icon-only mx-3 cursor-pointer" >
							<i class="fa fa-search search-btn text-secondary" @click="showSearch = !showSearch"></i>

						<transition name="slide-fade">
							<b-nav-form  class="ml-1" v-if="showSearch">
								<b-form-input :placeholder="$t('navbar.search')"></b-form-input>
							</b-nav-form>
						</transition>
						</span>
					</div>

					<div class="nav-item lang-switcher">
						<select-locale/>
					</div>

				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
</template>

<script>
	import Login from './../general/Login'
	import SelectLocale from './../general/SelectLocale'


	export default {
	  components:{
	    Login,
		  SelectLocale
	  },
		data(){
		  return {
		    showSearch: false,
		    showLogin: false,

		  }
		}
	}
</script>