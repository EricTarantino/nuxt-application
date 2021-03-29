// empty file to initialize store
export const state = () => ({
  // Femprocessparameter.vue
  processParameterHeight: 0,
  showMaterial: false,
  showRingjack: false, 
  showProcess: false,
  toggles: ["showMaterial", "showRingjack", "showProcess"],
})
  
export const mutations = {
  // Femprocessparameter.vue
  setProcessParameterHeight(state, processParameterHeight) {
    state.processParameterHeight = processParameterHeight
  },
  toggleParameter(state, param){
    state[param] = ! state[param]
  }
}