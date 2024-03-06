import {usePyLearnStore} from '~/store/pylearnStore'
import { useSupabaseClient } from '#imports'


export default defineNuxtRouteMiddleware(async (to, from) => {
		const superbase = useSupabaseClient();
		const {error} = await superbase.auth.getSession();
		console.log(error)
		if (error && !to.path.includes("signin")
		  && !to.path.includes("signup")){
			console.log('redirect')
			return navigateTo("/signin");
		}
		// return navigateTo(to);

})