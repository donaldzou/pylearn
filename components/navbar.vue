<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'navbar'
})
</script>

<template>
	<nav class="navbar bg-transparent sticky-top">
		<div class="container-fluid">
			<router-link to="/" class="navbar-brand" href="#">PyLearn</router-link>
			<div class="ms-auto">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">
							<i class="bi bi-person-circle"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped>

</style>