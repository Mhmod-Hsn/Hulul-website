<template>
	<b-card class="login-popup">

		<b-form>
			<b-form-group>
				<b-form-input
					id="email"
					v-model="login.email"
					type="email"
					required
					placeholder="البريد الالكتروني"
				></b-form-input>
			</b-form-group>
			<b-form-group>
				<b-form-input
					id="password"
					v-model="login.password"
					type="password"
					required
					placeholder="كلمة المرور"
				></b-form-input>
			</b-form-group>


			<b-button class="btn-block" type="submit" variant="secondary">Submit</b-button>
		</b-form>
	</b-card>
</template>

<script>
  export default {
    name: "Login",
	  data(){
      return{
        login:{
          email:'',
          password:''
        }
      }
	  }
  }
</script>

<style scoped>

</style>