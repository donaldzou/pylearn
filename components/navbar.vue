<script lang="ts">
import { defineComponent } from 'vue'
import { useSupabaseClient } from '#imports'

export default defineComponent({
	name: 'navbar',
	methods: {
		async signOut(){
			const superbase = useSupabaseClient();
			const {error} = await superbase.auth.signOut();
			await this.$router.push("/signin");
		}
	}
})
</script>

<template>
	<nav class="navbar navbar-expand-lg bg-transparent">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">PyLearn</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">

					<li class="nav-item dropdown">
						<a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i class="bi bi-person-circle"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-end">
							<li><a role="button" class="dropdown-item text-danger" @click="signOut()">Sign Out</a></li>
						</ul>
					</li>

				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped>

</style>