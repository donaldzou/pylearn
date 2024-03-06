<script setup async lang="ts">
	import { usePyLearnStore } from '~/store/pylearnStore'
	const store = usePyLearnStore();
	await store.getGameLevel();
</script>

<template>
	<div>
		<navbar></navbar>
		<div class="container mt-5" style="width: 600px">
			<h1>
				Welcome to PyLearn
			</h1>
			<p>Select a level to begin your journey</p>
			<div>
				<a href="#" class="card shadow mb-3 rounded-3" v-for="level in store.gameLevels">
					<div class="card-header bg-transparent border-0 pb-0">
						<small>Level {{level.id}}</small>
					</div>
					<div class="card-body d-flex align-items-center">
						{{ level.gameLevelName }}
						<i class="bi bi-arrow-right ms-auto"></i>
					</div>
				</a>
			</div>
		</div>
	</div>

</template>

<style scoped>

</style>