import { defineStore } from 'pinia'
export const usePyLearnStore = defineStore('Pylearn Store', {
  state: () => ({
    	user: undefined,
	  	gameLevels: null
  }),
  actions: {
	  async getGameLevel(){
		  const superbase = useSupabaseClient();
		  // @ts-ignore
		  const { data } = await superbase.from('gameLevel').select();
		  console.log(data)
		  // @ts-ignore
		  this.gameLevels = data;
	  }
  }
})