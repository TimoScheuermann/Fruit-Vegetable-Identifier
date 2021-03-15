export interface FVIClass {
  title: string
  thumbnail: string
  nutrition: {
    calories: string
    carbs: string
    fats: string
    proteins: string
    sugars: string
  }
  information: string[]
}

export interface Prediction {
  class: number
  prop: number
}
