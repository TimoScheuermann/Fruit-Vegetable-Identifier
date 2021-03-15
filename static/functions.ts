import * as tf from '@tensorflow/tfjs'
import { LayersModel, Tensor } from '@tensorflow/tfjs'
import { Prediction } from './interfaces'
/**
 * convert a base64 encoded image to a HTMLImageElement
 * @param src base64 encoded image
 * @returns HTMLImageElement
 */
export async function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve(img || null)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

export async function getInputImage(e: Event): Promise<string | null> {
  return new Promise(resolve => {
    const files = (e.target as HTMLInputElement).files
    if (!files || files.length == 0) {
      resolve(null)
      return
    }
    const reader = new FileReader()
    reader.onload = () => resolve((reader.result as string) || null)
    reader.onerror = () => resolve(null)
    reader.readAsDataURL(files[0])
  })
}

/**
 * Runs the prediction of a given img on a given model and returns the predicition array
 * @param img HTMLImageElement with base64 encoded src
 * @param model loaded TensorFlow.js model
 * @returns Result[] of the prediction
 */
export async function predictImage(
  img: HTMLImageElement,
  model: LayersModel
): Promise<Prediction | null> {
  // configure model
  const offset = tf.scalar(127.5)
  const tensor = tf.browser
    .fromPixels(img)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .sub(offset)
    .div(offset)
    .expandDims()

  // run prediction
  const predictions = await (model.predict(tensor) as Tensor).data()

  // map prediction to make it easier to understand for the user
  return (
    Array.from(predictions)
      .map((p, i) => {
        return { class: i, prop: p }
      })
      .sort((a, b) => b.prop - a.prop)[0] || null
  )
}
