import { FVIClass } from './interfaces'

const APPLE: FVIClass = {
  title: 'Apfel',
  thumbnail:
    'https://images.unsplash.com/photo-1537283963865-f825e1ea7e21?w=1920&q=20',
  information: [
    'Hallo, Information #1',
    'Und das ist Information #2',
    'und die #3 gibts natürlich auch noch'
  ],
 nutrition: {
    calories: '54 kcal',
    carbs: '14.4 g',
    fats: '0.1 g',
    proteins: '0.3 g',
    sugars: '10.3 g'
  }
}

const BROCCOLI: FVIClass = {
  title: 'Brokkoli',
  thumbnail:
    'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=1920&q=20',
  information: [
    'Hallo, Information #1',
    'Und das ist Information #2',
    'und die #3 gibts natürlich auch noch'
  ],
  nutrition: {
    calories: '500 cal',
    carbs: 'xy z',
    fats: '0 g',
    proteins: '14 g',
    sugars: '1000 kg'
  }
}

const GRAPE: FVIClass = {
  title: 'Weintraube',
  thumbnail:
    'https://images.unsplash.com/photo-1572360678077-0ab5ce1be418?w=1920&q=20',
  information: [
    'Hallo, Information #1',
    'Und das ist Information #2',
    'und die #3 gibts natürlich auch noch'
  ],
 nutrition: {
    calories: '68 kcal',
    carbs: '15.6 g',
    fats: '0.3 g',
    proteins: '0.7 g',
    sugars: '15.4 g'
  }
}

const LEMON: FVIClass = {
  title: 'Zitrone',
  thumbnail:
    'https://images.unsplash.com/photo-1609639643505-3c158a56de42?w=1920&q=20',
  information: [
    'Hallo, Information #1',
    'Und das ist Information #2',
    'und die #3 gibts natürlich auch noch'
  ],
  nutrition: {
    calories: '39 kcal',
    carbs: '3.2 g',
    fats: '0.6 g',
    proteins: '0.7 g',
    sugars: '3 g'
  }
}

const MANGO: FVIClass = {
  title: 'Mango',
  thumbnail:
    'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=1920&q=20',
  information: [
    'Hallo, Information #1',
    'Und das ist Information #2',
    'und die #3 gibts natürlich auch noch'
  ],
 nutrition: {
    calories: '62 kcal',
    carbs: '12.5 g',
    fats: '0.4 g',
    proteins: '0.6 g',
    sugars: '12.4 g'
  }
}

const ORANGE: FVIClass = {
  title: 'Orange',
  thumbnail:
    'https://images.unsplash.com/photo-1588913695593-e1293fe4863e?w=1920&q=20',
  information: [
    'Hallo, Information #1',
    'Und das ist Information #2',
    'und die #3 gibts natürlich auch noch'
  ],
  nutrition: {
    calories: '50 kcal',
    carbs: '8.3 g',
    sugars: '8.3 g',
    fats: '0.4 g',
    proteins: '1 g'
  }
}

const STRAWBERRY: FVIClass = {
  title: 'Erdbeere',
  thumbnail:
    'https://images.unsplash.com/photo-1588600958832-fa0b6e43966b?w=1920&q=20',
  information: [
    'Hallo, Information #1',
    'Und das ist Information #2',
    'und die #3 gibts natürlich auch noch'
  ],
  nutrition: {
    calories: '32 kcal',
    carbs: '5.4 g',
    fats: '0.4 g',
    proteins: '0.8 g',
    sugars: '5.3 g'
  }
}

const FVIClasses = [APPLE, BROCCOLI, GRAPE, LEMON, MANGO, ORANGE, STRAWBERRY]

export default FVIClasses
