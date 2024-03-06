import {usePyLearnStore} from '~/store/pylearnStore'
import { useSupabaseClient } from '#imports'


export default defineNuxtRouteMiddleware(async (to, from) => {
		const superbase = useSupabaseClient();
		const {error} = await superbase.auth.getSession();
		if (error && !to.path.includes("signin") && !to.path.includes("signup")){
			return navigateTo("/signin");
		}
		//
		if (!error && to.path.includes("signin")){
			return navigateTo("/");
		}
})