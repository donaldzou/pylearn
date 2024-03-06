<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'signup',
	data(){
		return {
			error: false,
			email: "",
			password: "",
			name: "",
			loading: false,
			errorMsg: "",
			success: false
		}
	},
	methods: {
		async signUp(){
			const superbase = useSupabaseClient();
			this.loading = true;
			const { error: signUpError, data: userData } = await superbase.auth.signUp({
				email: this.email,
				password: this.password,
				options: {
					data: {
						display_name: this.name
					}
				}
			});
			if (signUpError){
				this.error = true;
				this.errorMsg = signUpError.message;
				this.loading = false;
			}else{
				this.success = true;
				setTimeout(async () => {
					await superbase.auth.setSession({
						access_token: userData.session?.access_token,
						refresh_token: userData.session?.refresh_token
					});
					const router = useRouter();
					await router.push("/")
				}, 2000)
			}
		}
	}
})
</script>

<template>
	<div class="container d-flex w-100 vh-100">
		<div class="m-auto" style="width: 500px">
			<h5 class="mb-0">Welcome To</h5>
			<h1 class="display-1">PyLearn</h1>
			<hr>
			<h5 class="mb-3">Register an account to start your journey</h5>
			<div class="alert alert-danger" v-if="error && !success">
				<i class="bi bi-exclamation-circle-fill me-1"></i>
				{{this.errorMsg}}
			</div>
			<div class="alert alert-success" v-if="success">
				<i class="bi bi-check-circle me-1"></i>
				Sign up successfully! Redirecting...
			</div>
			<div class="mb-5">
				<div class="mb-4">
					<label class="mb-1"><i class="bi bi-envelope-fill me-2"></i>Email Address</label>
					<input class="form-control" :class="{'is-invalid': error}"
						   type="email"
						   v-model="email">
				</div>
				<div class="mb-4">
					<label class="mb-1"><i class="bi bi-lock-fill me-2"></i>Password</label>
					<input class="form-control"
						   :class="{'is-invalid': error}"
						   v-model="password"
						   type="password">
				</div>
				<div>
					<label class="mb-1"><i class="bi bi-person-circle me-2"></i>What is your name?</label>
					<input class="form-control"
						   :class="{'is-invalid': error}"
						   v-model="name"
						   type="text" >
				</div>


			</div>
			<div class="row gx-2 gy-4">
				<div class="col-12">
					<button class="btn btn-dark w-100"
							@click="signUp()"
							:disabled="email.length === 0
							|| password.length === 0 || loading">{{ !loading ? 'Sign Up':'Signing Up...'}}</button>
				</div>
				<div class="col-12">
					<p class="text-center mb-1 text-muted">Already have an account?</p>
					<nuxt-link class="btn btn-outline-dark w-100" :disabled="loading" to="/signin">Sign In</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>