import * as tf from '@tensorflow/tfjs'
import { LayersModel } from '@tensorflow/tfjs'
import { Prediction } from '~/static/interfaces'

export const state = () => ({
  // our model
  model: undefined,
  // model loading
  modelLoading: false,
  // base64 encoded input image
  src: null,
  // results after model has run its prediction
  result: null
})

export const getters = {
  /**
   * returns wheather the model has been loaded or not
   * @param state
   */
  modelLoaded(state: any): boolean {
    return !!state.model
  },
  /**
   * return the base64 encoded input image
   * @param state
   */
  src(state: any): string | null {
    return state.src
  },
  /**
   * returns null or the result after the model has predicted an image
   * @param state
   */
  result(state: any): Prediction | null {
    return state.result
  }
}

export const mutations = {
  /**
   * loads the model
   * @param state
   */
  async loadModel(state: any) {
    if (!state.model && !state.modelLoading) {
      state.modelLoading = true

      const indexeddb = 'indexeddb://fvi-model-v3'
      const modelPath = 'models/v3/model.json'

      // try to load the model from local storage
      try {
        state.model = await tf.loadLayersModel(indexeddb)
        console.log('Model loaded from ', indexeddb)
      } catch (error) {
        const model: LayersModel = await tf.loadLayersModel(modelPath)
        console.log('Model loaded from ', modelPath)

        model.save(indexeddb)
        state.model = model
      }
    }
  },
  /**
   * another image has been selected via the input field on /index.html
   * @param state
   * @param src base64 encoded input image
   */
  src(state: any, src: string) {
    state.result = null
    state.src = src
  },
  /**
   * model has succesfully predicted an image
   * @param state
   * @param result Mapped Results of the model
   */
  result(state: any, result: Prediction) {
    state.result = result
  }
}
