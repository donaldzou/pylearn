<script setup lang="ts">
	import { usePyLearnStore } from '~/store/pylearnStore'
	const superbase = useSupabaseClient();
	const email = ref("");
	const password = ref("")
	const error = ref(false);
	const loading = ref(false)

	const signIn = async () => {
		loading.value = true;
		const { error: loginError, data: userData } = await superbase.auth.signInWithPassword({
			email: email.value, password: password.value })
		if (loginError) error.value = true;
		else{
			await superbase.auth.setSession({
				access_token: userData.session?.access_token,
				refresh_token: userData.session?.refresh_token
			});
			const router = useRouter();
			await router.push("/")
		}
	}

</script>

<template>
	<div class="container d-flex w-100 vh-100">
		<div class="m-auto" style="width: 500px">
			<h1 class="display-1">PyLearn</h1>
			<div class="mb-5">
				<h6>Sign In</h6>
				<input class="form-control mb-2" :class="{'is-invalid': error}"
					   type="email"
					   v-model="email"
					   placeholder="Email Address">
				<input class="form-control"
					   :class="{'is-invalid': error}"
					   v-model="password"
					   type="password" placeholder="Password">
			</div>
			<div class="row gx-2 gy-4">
				<div class="col-12">
					<button class="btn btn-dark w-100"
							@click="signIn()"
							:disabled="email.length === 0
							|| password.length === 0 || loading">{{ !loading ? 'Sign In':'Signing In...'}}</button>
				</div>
				<div class="col-12">
					<p class="text-center mb-1 text-muted">Don't have an account yet?</p>
					<nuxt-link class="btn btn-outline-dark w-100" :disabled="loading" to="signup">Sign Up</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>