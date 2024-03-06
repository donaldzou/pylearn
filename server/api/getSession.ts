import { supabase } from '~/server/utils/superbase'

export default defineEventHandler( async (event) => {
	const { data, error } = await supabase.auth.getSession()
	console.log(data)
})