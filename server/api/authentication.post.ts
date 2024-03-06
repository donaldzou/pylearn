
import { useNuxtApp } from 'nuxt/app';
import { supabase } from '~/server/utils/superbase'

export default defineEventHandler( async (event) => {
		const body : {email: string, password: string} = await readBody(event);
		const { data, error } = await supabase.auth.signInWithPassword({
				email: body.email,
				password: body.password,
		});

		// if (data.user !== null){
		// 	await supabase.auth.setSession(data.session);
		// }

		return {data}
})