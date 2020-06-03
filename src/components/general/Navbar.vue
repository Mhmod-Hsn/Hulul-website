<template>
	<b-navbar toggleable="lg" type="light" variant="white" fixed="top" class="container-fluid">
			<router-link :to="{name: 'Home',params:{'lang':$i18n.locale}}" class="cursor-pointer" tag="b-navbar-brand" >
				<img src="./../../assets/Logo.png" alt="">
			</router-link>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<router-link exact tag="b-nav-item" :to="{name: 'Home',params:{'lang':$i18n.locale}}"> {{ $t('navbar.home') }}</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'About',params:{'lang':$i18n.locale}}">{{ $t('navbar.about') }}</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'Services',params:{'lang':$i18n.locale}}">{{ $t('navbar.services')
						}}</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'Projects',params:{'lang':$i18n.locale}}">{{ $t('navbar.projects')
						}}</router-link>
					<router-link exact tag="b-nav-item" :to="{name: 'Contact',params:{'lang':$i18n.locale}}">{{ $t('navbar.contact') }}</router-link>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

					<div class="search">
						<span class="icon-only cursor-pointer" >
						<transition name="slide-fade">
							<b-nav-form  class="ml-1" v-if="showSearch">
								<b-form-input :placeholder="$t('navbar.search')"></b-form-input>
							</b-nav-form>
						</transition>
						<i class="fa fa-search search-btn text-secondary mx-2" @click="showSearch = !showSearch"></i>


						<b-nav-form  class="ml-1 d-block d-lg-none search-small-device">
							<b-form-input :placeholder="$t('navbar.search')"></b-form-input>
						</b-nav-form>

						</span>
					</div>

					<div class="login mx-2">
						<button class="btn btn-primary" @click="showLogin = !showLogin">{{ $t('authentication.login') }}</button>

						<transition name="slide-fade-top" mode="in-out">
							<Login v-if="showLogin"/>
						</transition>
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


<style lang="scss">
	nav{
		.navbar-toggler:focus{
			outline: none;
		}
		.navbar-brand{
			img{
				width: 150px;
			}
		}
		.navbar-nav{
			.nav-item{
				font-size: 0.9rem;
				font-weight: bold;
				margin-left: 0.6rem!important;
				border-bottom:  3px solid transparent;
				transition: all 0.3s ease;

				&.router-link-exact-active{
					border-bottom-color: var(--secondary);
				}
			}
		}

		.login{
			position: relative;

			.login-popup{
				position: absolute;
				top: calc(100% + 20px);
				left: 0;
				width: 300px;
			}
		}
	}

	@media (max-width: 992px) {

		.navbar-nav{
			padding: 0 15px;
		}

		.navbar-collapse{
			width: 90%;
			display: block;
			border-radius: 15px;
			box-shadow: 0 5px 10px #aaa;
			margin: 0 15px;
			padding: 10px;

			.navbar-nav{
				&>div{
					margin-bottom: 10px;

					.icon-only{
						margin: 0!important;
					}
				}

				.nav-item{
					border:  3px solid transparent;
					border-bottom: transparent;
					padding-left: 10px;
					&.router-link-exact-active{
						border-left-color: var(--secondary);
					}
				}

				#localeSwitcher,
				#localeSwitcher button,
				.login .btn{
					display: block;
					width: 100%;
				}

				.search{
					padding: 0 10px;

					.form-inline,
					.form-inline .form-control{
						display: block;
						width: 100%;
					}
					.icon-only{
						i{
							display: none;
						}
					}
				}
				.lang-switcher{
					margin: 0 0 10px 0!important;
					padding: 0 10px;

					.dropdown-menu {
						position: absolute;
						right: 0!important;
						left: 0!important;
					}

				}
			}
		}
	}
</style>