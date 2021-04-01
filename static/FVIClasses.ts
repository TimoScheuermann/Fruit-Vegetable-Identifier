import { FVIClass } from './interfaces'

const APPLE: FVIClass = {
  title: 'Apfel',
  thumbnail:
    'https://images.unsplash.com/photo-1537283963865-f825e1ea7e21?w=1920&q=20',
  information: [
    'Der Apfel galt im antiken Griechenland als Liebesbeweis. Wenn ein junger Mann seiner Geliebten im antiken Griechenland seine Liebe erklären und ihr zugleich einen Heiratsantrag machen wollte, so soll er ihr einen Apfel angeboten haben - akzeptierte sie den Apfel, nahm sie gleichzeitig auch den Heiratsantrag an.'
  ],
  nutrition: {
    calories: '54 kcal',
    carbs: '14.4 g',
    fats: '0.1 g',
    proteins: '0.3 g',
    sugars: '10.3 g'
  }
}

const APRICOT: FVIClass = {
  title: 'Aprikose',
  thumbnail:
    'https://images.unsplash.com/photo-1586127145878-56a6b3dd537f?w=1920&q=20',
  information: ['Die getrocknete Aprikosen helfen dir bei der Gewichtsabnahme, da die Konzentration der Nährstoffe höher ist, brauchst du auch nur eine kleiner Portion um dein Sättigungsgefühl zu erreichen. Somit optimal als Snack während der Diät zwischendurch.'],
  nutrition: {
    calories: '48 kcal',
    carbs: '10 g',
    fats: '0.1 g',
    proteins: '0.9 g',
    sugars: '7.7 g'
  }
}

const AVOCADO: FVIClass = {
  title: 'Avocado',
  thumbnail:
    'https://images.unsplash.com/photo-1587825045005-c9cc5fa27203?w=1920&q=20',
  information: ['Avocadobäume bestäuben sich nicht selbst. Sie brauchen einen anderen Avocadobaum in der Nähe, um zu wachsen. Avocados sind ein aztekisches Symbol für Liebe und Fruchtbarkeit, und sie wachsen auch paarweise auf Bäumen.'],
  nutrition: {
    calories: '160 kcal',
    carbs: '0.4 g',
    fats: '15 g',
    proteins: '1.9 g',
    sugars: '0.4 g'
  }
}

const BANANA: FVIClass = {
  title: 'Banane',
  thumbnail:
    'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1920&q=20',
  information: ['2016 wurde in China ein neues Gesetz verabschiedet, das es verbietet, im Livestream auf verführerische Art Bananen zu essen.'],
  nutrition: {
    calories: '93 kcal',
    carbs: '20 g',
    sugars: '17 g',
    fats: '0.2 g',
    proteins: '1 g'
  }
}

const CANTALOUPE: FVIClass = {
  title: 'Cantaloupe',
  thumbnail:
    'https://images.unsplash.com/photo-1598965869429-7ffa11f0b745?w=1920&q=20',
  information: ['Es gibt Wassermelonen und es gibt Zuckermelonen. Von Zuckermelonen gibt es rund 500 verschiedene Sorten, die beliebteste darunter ist die Cantaloupe.'],
  nutrition: {
    calories: '35 kcal',
    carbs: '8 g',
    fats: '0.2 g',
    proteins: '0.8 g',
    sugars: 'k.A.'
  }
}

const CHERRY: FVIClass = {
  title: 'Kirsche',
  thumbnail:
    'https://images.unsplash.com/photo-1528821099448-43ccebfbb899?w=1920&q=20',
  information: ['Kirschen machen glücklich – insbesondere Schattenmorellen. Diese enthalten besonders viel von der Aminosäure Trypthopghan, ein Baustoff für diverse Glückshormone.'],
  nutrition: {
    calories: '64 kcal',
    carbs: '13.3 g',
    fats: '0.3 g',
    proteins: '0.9 g',
    sugars: '11.7 g'
  }
}

const COCOS: FVIClass = {
  title: 'Kokosnuss',
  thumbnail:
    'https://images.unsplash.com/photo-1589531786867-d06bad774195?w=1920&q=20',
  information: ['Um herauszufinden, ob eine Kokosnuss noch frisch ist, musst Du sie einfach schütteln. Hört sich die Frucht voll an und es „schwappt“, ist die Nuss noch frisch. Je älter sie ist, desto weniger Flüssigkeit enthält sie!'],
  nutrition: {
    calories: '354 kcal',
    carbs: '15 g',
    fats: '34 g',
    proteins: '4 g',
    sugars: '7 g'
  }
}

const DATE: FVIClass = {
  title: 'Datteln',
  thumbnail:
    'https://images.unsplash.com/photo-1598228961764-fdc1484f2af1?w=1920&q=20',
  information: ['Datteln machen glücklich und zwar durch den hohen Tryptophan-Gehalt, der im Körper in Serotonin und Melatonin umgewandelt wird.'],
  nutrition: {
    calories: '297 kcal',
    carbs: '65 g',
    fats: '0.5 g',
    proteins: '2 g',
    sugars: '65 g'
  }
}

const GRAPE: FVIClass = {
  title: 'Weintraube',
  thumbnail:
    'https://images.unsplash.com/photo-1572360678077-0ab5ce1be418?w=1920&q=20',
  information: [
    'Es gibt Menschen, die unter einer Weinphobie leiden. Der Fachbegriff für die Angst vorm Wein lautet Oenophobie.'],
  nutrition: {
    calories: '68 kcal',
    carbs: '15.6 g',
    fats: '0.3 g',
    proteins: '0.7 g',
    sugars: '15.4 g'
  }
}

const GUAVA: FVIClass = {
  title: 'Guave',
  thumbnail:
    'https://images.unsplash.com/photo-1600659090872-74ca5ca1023a?w=1920&q=20',
  information: ['Gerade Raucher, die höhere Mengen an Antioxidantien, Karotin und Anthocyan als Nichtraucher brauchen, sollten die Guave in ihren Ernährungsplan hinzufügen.'],
  nutrition: {
    calories: '61 kcal',
    carbs: '12.89 g',
    fats: '0.86 g',
    proteins: '2.3 g',
    sugars: '8.03 g'
  }
}

const KIWI: FVIClass = {
  title: 'Kiwi',
  thumbnail:
    'https://images.unsplash.com/photo-1591796079433-7f41b45eb95c?w=1920&q=20',
  information: ['Kiwis enthalten mehr Vitamin C als Orangen.'],
  nutrition: {
    calories: '62 kcal',
    carbs: '9.1 g',
    fats: '0.6 g',
    proteins: '1 g',
    sugars: '9 g'
  }
}

const LEMON: FVIClass = {
  title: 'Zitrone',
  thumbnail:
    'https://images.unsplash.com/photo-1609639643505-3c158a56de42?w=1920&q=20',
  information: [
    'Das Streuen von Zitronensaft auf andere Früchte kann verhindern, dass sie braun werden.'
  ],
  nutrition: {
    calories: '39 kcal',
    carbs: '3.2 g',
    fats: '0.6 g',
    proteins: '0.7 g',
    sugars: '3 g'
  }
}

const LIME: FVIClass = {
  title: 'Limette',
  thumbnail:
    'https://images.unsplash.com/photo-1578855691621-8a08ea00d1fb?w=1920&q=20',
  information: ['Das Wichtigste für fitnessbewusste Urlauber: Low Carb Caipirinha-> 6 cl Cachaca (Pitù), 1 Limette, 2 EL Erythrit oder Kokosblütenzucker, 5 EL Crushed Ice. Cheers!'],
  nutrition: {
    calories: '48 kcal',
    carbs: '1.9 g',
    fats: '2.4 g',
    proteins: '0.5 g',
    sugars: '1.9 g'
  }
}

const LYCHEE: FVIClass = {
  title: 'Litschi',
  thumbnail:
    'https://images.unsplash.com/photo-1591600986686-bf5f872d2e4e?w=1920&q=20',
  information: ['In Südchina konnte man vor vielen vielen Jahren in manchen Gegenden mit Litchis bezahlen. Wir wetten dass einige auch Rambutans benutzt haben.'],
  nutrition: {
    calories: '76 kcal',
    carbs: '17 g',
    fats: '0.3 g',
    proteins: '0.9 g',
    sugars: '15.2 g'
  }
}

const MANGO: FVIClass = {
  title: 'Mango',
  thumbnail:
    'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=1920&q=20',
  information: [
    '100 g Mango decken bereits fast 60% des Bedarfs an Vitamin A eines Erwachsenen! Das ist doppelt so viel wie ihr Gehalt an Vitamin C! Vitamin A ist unter anderem wichtig für die Haut und das Sehvermögen.'
  ],
  nutrition: {
    calories: '62 kcal',
    carbs: '12.5 g',
    fats: '0.4 g',
    proteins: '0.6 g',
    sugars: '12.4 g'
  }
}

const MARACUJA: FVIClass = {
  title: 'Maracuja',
  thumbnail:
    'https://images.unsplash.com/photo-1464287047163-e0b510b491e9?w=1920&q=20',
  information: ['Das Passionsfrucht hat eine violette Hülle. Die Maracuja dagegen ist die gelbe Passionsfrucht, das auch säurehaltiger ist.'],
  nutrition: {
    calories: '67 kcal',
    carbs: '9.5 g',
    fats: '0.4 g',
    proteins: '2.4 g',
    sugars: '9.5 g'
  }
}

const ORANGE: FVIClass = {
  title: 'Orange',
  thumbnail:
    'https://images.unsplash.com/photo-1588913695593-e1293fe4863e?w=1920&q=20',
  information: [
    'Durchschnittlich verzehrt jeder Deutsche rund sechs Kilogramm Orangen im Jahr.'
  ],
  nutrition: {
    calories: '50 kcal',
    carbs: '8.3 g',
    sugars: '8.3 g',
    fats: '0.4 g',
    proteins: '1 g'
  }
}

const PAPAYA: FVIClass = {
  title: 'Papaya',
  thumbnail:
    'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=1920&q=20',
  information: ['Die Papayakerne kannst Du ganz toll zum Würzen einsetzen und sie sind ein klasse Pfefferersatz. Sie schmecken milder als Pfeffer und auch aromatischer.'],
  nutrition: {
    calories: '43 kcal',
    carbs: '7.2 g',
    fats: '0.3 g',
    proteins: '0.5 g',
    sugars: '7 g'
  }
}

const PASSION_FRUIT: FVIClass = {
  title: 'Passionsfrucht',
  thumbnail:
    'https://images.unsplash.com/photo-1604495772376-9657f0035eb5?w=1920&q=20',
  information: ['Das Passionsfrucht hat eine violette Hülle. Die Maracuja dagegen ist die gelbe Passionsfrucht, das auch säurehaltiger ist.'],
  nutrition: {
    calories: '67 kcal',
    carbs: '9.5 g',
    fats: '0.4 g',
    proteins: '2.4 g',
    sugars: '9.5 g'
  }
}

const PEACH: FVIClass = {
  title: 'Pfirsich',
  thumbnail:
    'https://images.unsplash.com/photo-1595124245030-41448b199d6d?w=1920&q=20',
  information: ['Ein Pfirsich war die allererste Frucht, die auf dem Mond gegessen wurde.'],
  nutrition: {
    calories: '39 kcal',
    carbs: '8.9 g',
    sugars: '8 g',
    fats: '0.1 g',
    proteins: '0.8 g'
  }
}

const PEAR: FVIClass = {
  title: 'Birne',
  thumbnail:
    'https://images.unsplash.com/photo-1601876819102-99560f772713?w=1920&q=20',
  information: ['Wie passt die Birnensorte „Williams Christ“ in Spirituosen-Flaschen? Den noch ganz kleinen Früchten werden am Baum Flaschen übergestülpt und am Zweig befestigt. Die Birne wächst dann in der Flasche weiter bis zur Reife. Nach der Entfernung vom Zweig wird der Schnaps zugegossen.'],
  nutrition: {
    calories: '52 kcal',
    carbs: '12.4 g',
    fats: '0.3 g',
    proteins: '0.5 g',
    sugars: '10.2 g'
  }
}

const PINEAPPLE: FVIClass = {
  title: 'Ananas',
  thumbnail:
    'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=1920&q=20',
  information: ['Die Ananas ist ein echter Stimmungsaufheller. So enthält sie natürliches Vanillin, das anregend und euphorisierend wirken soll. Die ebenfalls enthaltene Aminosäure Tryptophan, die Vorstufe des sogenannten Glückshormons Serotonin, sorgt für Ausgeglichenheit und gute Laune.'],
  nutrition: {
    calories: '57 kcal',
    carbs: '12.4 g',
    fats: '0.2 g',
    proteins: '0.5 g',
    sugars: '12.4 g'
  }
}

const PLUM: FVIClass = {
  title: 'Pflaume',
  thumbnail:
    'https://images.unsplash.com/photo-1603408209093-cd3c9af497d6?w=1920&q=20',
  information: ['Auf dem Weg durch den Darm nehmen die unverdaulichen Nahrungsfasern aus den Pflaumen verschiedene Abfall- und Giftstoffe mit und tragen damit zur Krebsprophylaxe bei.'],
  nutrition: {
    calories: '45 g',
    carbs: '10 g',
    fats: '0.2 g',
    proteins: '0.6 g',
    sugars: '10 g'
  }
}

const POMEGRANATE: FVIClass = {
  title: 'Granatapfel',
  thumbnail:
    'https://images.unsplash.com/photo-1597854710119-dbb43d562f78?w=1920&q=20',
  information: ['Die Frucht enthält das pflanzliche Gerbstoff Tannin, was eine adstrigierende und entzündungshemmende Wirkung auf die Schleimhaut im Verdauungstrakt hat.'],
  nutrition: {
    calories: '80 kcal',
    carbs: '19 g',
    fats: '1.2 g',
    proteins: '1.7 g',
    sugars: '14 g'
  }
}

const POMELO: FVIClass = {
  title: 'Pampelmuse',
  thumbnail:
    'https://images.unsplash.com/photo-1550828553-7c8732c4bda6?w=1920&q=20',
  information: ['Dank des Inhaltstoffes Naringin senkt der Verzehr von Pomelos den Blutdruck und stärkt unsere Gefäße.'],
  nutrition: {
    calories: '80 kcal',
    carbs: '19 g',
    fats: '1.2 g',
    proteins: '1.7 g',
    sugars: '14 g'
  }
}

const RASPBERRY: FVIClass = {
  title: 'Himbeeren',
  thumbnail:
    'https://images.unsplash.com/photo-1569474998941-1665e838d492?w=1920&q=20',
  information: ['Russland ist der größte Himbeerhersteller der Welt. Pro Jahr werden etwa 125.000 Tonnen Himbeeren produziert.'],
  nutrition: {
    calories: '34 kcal',
    carbs: '4.8 g',
    fats: '0.3 g',
    proteins: '1.3 g',
    sugars: '4.6 g'
  }
}

const STRAWBERRY: FVIClass = {
  title: 'Erdbeere',
  thumbnail:
    'https://images.unsplash.com/photo-1588600958832-fa0b6e43966b?w=1920&q=20',
  information: [
    'Die Erdbeere ist eine Sammelnussfrucht und hat durchschnittlich 200 Samen an der Außenseite. Die Samen sind dabei die eigentlichen Früchte.'
  ],
  nutrition: {
    calories: '32 kcal',
    carbs: '5.4 g',
    fats: '0.4 g',
    proteins: '0.8 g',
    sugars: '5.3 g'
  }
}

// Gemüse & Restobst

const BROCCOLI: FVIClass = {
  title: 'Brokkoli',
  thumbnail:
    'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=1920&q=20',
  information: [
    'Das Trio aus Polyphenol (chemische Verbindung), Antioxidantien und Folsäure (Vitamin B9), das in Brokkoli zu finden ist, stärkt das Herz und schützt den lebensnotwendigen Muskel vor Krankheiten oder dem Stillstand.'
  ],
  nutrition: {
    calories: '34 kcal',
    carbs: '2.7 g',
    fats: '0.2 g',
    proteins: '3.8 g',
    sugars: '2.7 g'
  }
}

const BEETROOT: FVIClass = {
  title: 'Rote Bete',
  thumbnail:
    'https://images.unsplash.com/photo-1580909784825-a32dca9ceb7a?w=1920&q=20',
  information: ['Ein Glas Rote-Bete-Saft am Tag enthält genug Kieselsäure, um unsere Nägel zu stärken und die Haarwurzeln nachweislich zu festigen.'],
  nutrition: {
    calories: '42 kcal',
    carbs: '8.4 g',
    fats: '0.1 g',
    proteins: '1.5 g',
    sugars: '8.4 g'
  }
}

const BELLPEPPER: FVIClass = {
  title: 'Paprika',
  thumbnail:
    'https://images.unsplash.com/photo-1606989003252-ce8bda4c5adf?w=1920&q=20',
  information: ['Früher gab es tatsächlich nur scharfe Paprika. Erst in den 1950er Jahren wurden in Ungarn die ersten süße Paprika gezüchtet.'],
  nutrition: {
    calories: '37 kcal',
    carbs: '6.4 g',
    fats: '0.5 g',
    proteins: '1.3 g',
    sugars: '6.4 g'
  }
}

const BLUEBERRY: FVIClass = {
  title: 'Heidelbeeren',
  thumbnail:
    'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=1920&q=20',
  information: ['Medizinische Studien haben gezeigt, dass die aus Heidelbeeren isolierten Substanzen die Augenfunktion verbessern und die Durchblutung der Netzhaut beschleunigen.'],
  nutrition: {
    calories: '42 kcal',
    carbs: '7.4 g',
    fats: '0.6 g',
    proteins: '0.6 g',
    sugars: '6 g'
  }
}

const CACTUS_FRUIT: FVIClass = {
  title: 'Kaktusfeige',
  thumbnail:
    'https://cdn.pixabay.com/photo/2020/06/19/07/13/prickly-pear-5315956_960_720.jpg?w=1920&q=20',
  information: ['Die Inhaltsstoffe von Kaktusfeigen, können Fett binden und blockieren. Aufgrund ihrer Bindungsaffinität sorgen sie dafür, dass der Körper Nahrungsfette nicht als unschöne Fettdepots an Bauch und Hüfte lagert, sondern unverdaut wieder abgibt.'],
  nutrition: {
    calories: '46 kcal',
    carbs: '7.1 g',
    fats: '0.4 g',
    proteins: '1 g',
    sugars: '7.1 g'
  }
}

const CARAMBOLA: FVIClass = {
  title: 'Karambola (Sternfrucht)',
  thumbnail:
    'https://cdn.pixabay.com/photo/2016/07/22/09/59/fruit-1534493_960_720.jpg?w=1920&q=20',
  information: ['Lecker aber tödlich: Für Nierenkranke sind Sternfrüchte tabu. Denn die auch Karambole genannte Frucht enthält ein Nervengift, das gesunden Menschen nicht schadet, bei Nierenkranken aber schwere Vergiftungen auslösen kann.'],
  nutrition: {
    calories: '31 kcal',
    carbs: '6.7 g',
    fats: '0.3 g',
    proteins: '1 g',
    sugars: 'k.A.'
  }
}

const CAULIFLOWER: FVIClass = {
  title: 'Blumenkohl',
  thumbnail:
    'https://images.unsplash.com/photo-1604573291048-7e10e1db605b?w=1920&q=20',
  information: ['Blumenkohl ist der Papi von Romanesco - aufgrund der Verwandtschaft mit dem Brokkoli konnte durch die Kreuzung von Blumenkohl und Brokkoli die Sorte Romanesco, auch bekannt als grüner Blumenkohl, gezüchtet werden'],
  nutrition: {
    calories: '28 kcal',
    carbs: '2.3 g',
    fats: '0.3 g',
    proteins: '1.9 g',
    sugars: '1.7 g'
  }
}

const CHESTNUT: FVIClass = {
  title: 'Esskastanien (Maronen)',
  thumbnail:
    'https://images.unsplash.com/photo-1510950109928-f3aac6afbb03?w=1920&q=20',
  information: ['Die kleinen Kraftpakete enthalten sämtliche B-Vitamine (toll für die Haare), Vitamin E und C, das Provitamin A, hochwertiges Eiweiß und eine ganze Riege wichtiger Mineralstoffe und Spurenelemente wie Kalium, Calcium (die Zähne schreien Hurra), Phosphor, Schwefel, Eisen, Magnesium, Kupfer und Mangan.'],
  nutrition: {
    calories: '175 kcal',
    carbs: '40 g',
    fats: '0.4 g',
    proteins: '3 g',
    sugars: '8 g'
  }
}

const CORN: FVIClass = {
  title: 'Mais',
  thumbnail:
    'https://images.unsplash.com/photo-1552318744-8cdc310db580?w=1920&q=20',
  information: ['Umweltheld - 1 ha Maisanbau "recycelt" den CO2-Ausstoß von 60.000 km Autofahrt bzw. vier Pkw "Durchschnittsfahrern" '],
  nutrition: {
    calories: '109 kcal',
    carbs: '15.7 g',
    fats: '1.2 g',
    proteins: '3.3 g',
    sugars: '3.2 g'
  }
}

const CUCUMBER: FVIClass = {
  title: 'Gurke',
  thumbnail:
    'https://images.unsplash.com/photo-1552318744-8cdc310db580?w=1920&q=20',
  information: ['Nicht rumgurken. Trainieren! Weil wir so nett sind hier noch extra Klugscheißerwissen für Dich: Es kann einen Unterschied von 20 ° zwischen der Innenseite einer Gurke und der tatsächlichen Außentemperatur geben. Es wird angenommen, dass dies der Ursprung der Wendung „Cool wie eine Gurke“ ist.'],
  nutrition: {
    calories: '16 kcal',
    carbs: '1.8 g',
    fats: '0.2 g',
    proteins: '0.6 g',
    sugars: '1.4 g'
  }
}

const EGGPLANT: FVIClass = {
  title: 'Aubergine',
  thumbnail:
    'https://images.unsplash.com/photo-1601477572224-cb15a76f30f4?w=1920&q=20',
  information: ['Die Leute nannten die Pflanze „Eggplant“, weil bestimmte Sorten weiße Früchte von ovaler Form produzieren, die wie Hühnereier aussehen.'],
  nutrition: {
    calories: '25 kcal',
    carbs: '2.6 g',
    fats: '0.2 g',
    proteins: '1.3 g',
    sugars: 'k.A.'
  }
}

const FIG: FVIClass = {
  title: 'Feige',
  thumbnail:
    'https://images.unsplash.com/photo-1601379760607-78be3d4ff432?w=1920&q=20',
  information: ['Schon in der Bibel spielen Feigen eine wichtige Rolle, nämlich im Garten Eden, als einzige Frucht neben dem Apfel. Nachdem Adam und Eva vom „Baum der Erkenntnis“ gegessen hatten, bedeckten sie sich mit Feigenblättern.'],
  nutrition: {
    calories: '63 kcal',
    carbs: '12.9 g',
    fats: '0.5 g',
    proteins: '1.3 g',
    sugars: '12.9 g'
  }
}

const GINGER: FVIClass = {
  title: 'Ingwer',
  thumbnail:
    'https://images.unsplash.com/photo-1615484478243-c94e896edbae?w=1920&q=20',
  information: ['Laut einer Studie der University of Georgia mildert Ingwer Muskelkater. Außerdem kurbelt er unseren Stoffwechsel an, was beim Abnehmen förderlich sein kann.'],
  nutrition: {
    calories: '70 kcal',
    carbs: '13 g',
    fats: '0.8 g',
    proteins: '1.6 g',
    sugars: '2 g'
  }
}

const KOHLRABI: FVIClass = {
  title: 'Kohlrabi',
  thumbnail:
    'https://images.unsplash.com/photo-1554107716-ec43584a2e9a?w=1920&q=20',
  information: ['Auf 100 Gramm des Wintergemüses kommen 322 Milligramm Kalium und 63 Milligramm Vitamin C, das ist mehr als bei mancher Obstsorte. Außerdem liefert die Knolle eine große Menge Phosphor - ein wichtiger Baustein für gesunde Knochen.'],
  nutrition: {
    calories: '28 kcal',
    carbs: '3.7 g',
    fats: '0.2 g',
    proteins: '1.9 g',
    sugars: '2.6 g'
  }
}

const MULBERRY: FVIClass = {
  title: 'Maulbeere',
  thumbnail:
    'https://cdn.pixabay.com/photo/2020/04/25/19/28/mulberry-5092327_960_720.jpg?w=1920&q=20',
  information: ['Laut einer Studie der Chung Shan Medical Universitiy in Taiwan bzw. dem daran angegliederten Institute of Biochemistry an Biotechnology, verhindern Maulbeeren sogar die Bildung von Metastasen bei Hautkrebs (Melanomen). Verantwortlich dafür sind die in den Früchten enthaltenen bioaktiven Anthocyanine.'],
  nutrition: {
    calories: '44 kcal',
    carbs: '8.1 g',
    fats: '0.4 g',
    proteins: '1.3 g',
    sugars: 'k.A.'
  }
}

const MUSKMELON: FVIClass = {
  title: 'Galiamelone (Muskmelon)',
  thumbnail:
    'https://cdn.pixabay.com/photo/2014/07/08/14/17/muskmelons-387466_960_720.jpg?w=1920&q=20',
  information: ['Botanisch gesehen sind die Zuckermelonen (zu denen die Galiamelone gehört) mehr mit der Gurke verwandt als mit der Wassermelone'],
  nutrition: {
    calories: '26 kcal',
    carbs: '5.6 g',
    fats: '0.1 g',
    proteins: '0.5 g',
    sugars: '3.9 g'
  }
}

const NECTARINE: FVIClass = {
  title: 'Nektarine',
  thumbnail:
    'https://cdn.pixabay.com/photo/2017/06/16/14/35/nectarine-2409370_960_720.jpg?w=1920&q=20',
  information: ['Pfirsich und Nektarinen sind die gleichen Arten, auch wenn sie kommerziell als unterschiedliche Früchte betrachtet werden. Der Unterschied zwischen ihnen ist, dass Pfirsiche die unscharfe Haut haben, während Nektarinen dies nicht tun.'],
  nutrition: {
    calories: '56 kcal',
    carbs: '12.4 g',
    fats: '0.1 g',
    proteins: '0.9 g',
    sugars: '12.3 g'
  }
}

const ONION: FVIClass = {
  title: 'Zwiebel',
  thumbnail:
    'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=1920&q=20',
  information: ['Wenn man eine aufgeschnittene Zwiebel auf der Fußsohle reibt, hat man etwa eine Stunde später den Geschmack von Zwiebel im Mund. Viel Spaß beim Ausprobieren ;)'],
  nutrition: {
    calories: '28 kcal',
    carbs: '4.9 g',
    fats: '0.2 g',
    proteins: '1.2 g',
    sugars: '4.9 g'
  }
}

const PERSIMMON: FVIClass = {
  title: 'Kaki',
  thumbnail:
    'https://cdn.pixabay.com/photo/2015/03/24/17/29/kaki-687896_960_720.jpg?w=1920&q=20',
  information: ['Besonders Sportler könnten von der Kaki profitieren, da sie dadurch schnell mit neuer Energie versorgt werden können. Zwei Kakis können bereits ausreichen, um auch den täglichen Bedarf an Vitamin A zu decken. Vitamin A unterstützt unsere Sehkraft und ist an zahlreichen Wachstumsvorgängen im Körper beteiligt. '],
  nutrition: {
    calories: '71 kcal',
    carbs: '16 g',
    fats: '0.3 g',
    proteins: '0.6 g',
    sugars: '16 g'
  }
}

const PHYSALIS: FVIClass = {
  title: 'Physalis',
  thumbnail:
    'https://cdn.pixabay.com/photo/2018/01/19/20/16/physalis-3093142_960_720.jpg?w=1920&q=20',
  information: ['In Frankreich heißen die Früchte Amour en cage- übersetzt also soviel wie Liebe in einem Käfig <3'],
  nutrition: {
    calories: '77 kcal',
    carbs: '13.3 g',
    fats: '1.1 g',
    proteins: '2.3 g',
    sugars: '3.9 g'
  }
}

const PITAYA: FVIClass = {
  title: 'Pitahaya',
  thumbnail:
    'https://images.unsplash.com/photo-1612955288824-151ec2d3a4d0?w=1920&q=20',
  information: ['Die Pitahaya hat einen positiven Einfluss auf den Cholesterinspiegel und kann somit helfen, Herzkrankheiten vorzubeugen.'],
  nutrition: {
    calories: '77 kcal',
    carbs: '13.3 g',
    fats: '1.1 g',
    proteins: '2.3 g',
    sugars: '3.9 g'
  }
}

const POTATO: FVIClass = {
  title: 'Kartoffel',
  thumbnail:
    'https://cdn.pixabay.com/photo/2016/06/10/16/32/potatoes-1448405_960_720.jpg?w=1920&q=20',
  information: [' In Deutschland gibt es drei Kartoffelmuseen: das Deutsche Kartoffelmuseum in Fußgönheim, das Kartoffelmuseum in München und das Vorpommersche Kartoffelmuseum in Tribsees.'],
  nutrition: {
    calories: '71 kcal',
    carbs: '14.6 g',
    fats: '0.1 g',
    proteins: '2 g',
    sugars: '0.7 g'
  }
}

const RAMBUTAN: FVIClass = {
  title: 'Rambutan',
  thumbnail:
    'https://cdn.pixabay.com/photo/2020/05/25/07/52/fruit-5217360_960_720.jpg?w=1920&q=20',
  information: ['Achtung Fake Litchi, trotzdem ein Superfrucht! Dank des Wassers, Proteine und Kohlenhydrate liefert Rambutan einen natürlichen Energieschub, weswegen die Frucht besonders unter Sportlern wertgeschätzt wird. Dank des Eisen hilft die Rambutan auch Sauerstoff von der Lunge zum Gewebe zu transportieren. '],
  nutrition: {
    calories: '71 kcal',
    carbs: '14.6 g',
    fats: '0.1 g',
    proteins: '2 g',
    sugars: '0.7 g'
  }
}

const SWEETPOTATO: FVIClass = {
  title: 'Süsskartoffel',
  thumbnail:
    'https://cdn.pixabay.com/photo/2018/07/24/13/01/vegetable-3559112_960_720.jpg?w=1920&q=20',
  information: ['Die Süßkartoffel hat mit der „normalen“ Kartoffel nicht viel gemein. Die Kartoffel ist ein Nachtschattengewächs. Die Süßkartoffel ein sogenanntes Windengewächs. Die Süßkartoffel darf roh verzehrt werden, aber die Kartoffel nicht. Von der Süßkartoffel darf sogar das Blattgrün mitgegessen werden.'],
  nutrition: {
    calories: '86 kcal',
    carbs: '20 g',
    fats: '0.1 g',
    proteins: '1.6 g',
    sugars: '4.2 g'
  }
}

const TOMATOES: FVIClass = {
  title: 'Tomaten',
  thumbnail:
    'https://images.unsplash.com/photo-1610216028956-98c3fd5a2a52?w=1920&q=20',
  information: ['Niemand liebt die Tomate mehr als die Italiener. Deshalb haben sie auch einen ganz besonderen Namen für sie: Pomodoro – was übersetzt Goldapfel heißt.'],
  nutrition: {
    calories: '18 kcal',
    carbs: '2.6 g',
    fats: '0.2 g',
    proteins: '1 g',
    sugars: '2.5 g'
  }
}

const WATERMELON: FVIClass = {
  title: 'Wassermelone',
  thumbnail:
    'https://images.unsplash.com/photo-1610216028956-98c3fd5a2a52?w=1920&q=20',
  information: ['Es wurde berichtet, dass die schwerste Wassermelone 159 kg wiegt, aber die meisten Sorten produzieren Wassermelonen von ungefähr 6 bis 12 kg (13-26 Pfund)'],
  nutrition: {
    calories: '39 kcal',
    carbs: '8.3 g',
    fats: '0.2 g',
    proteins: '0.6 g',
    sugars: '8.3 g'
  }
}

// REMINDER: Bitte nicht ändern, die Reihenfolge wird
//           vom trainierten Modell vorgegeben, wird
//           können nicht einfach alle hinzufügen und
//           erwarten, dass es funktioniert :)

const FVIClasses = [APPLE, BANANA, BELLPEPPER, BLUEBERRY, BROCCOLI, CARAMBOLA, CAULIFLOWER, CHERRY, CORN, EGGPLANT, FIG, GINGER, GRAPE, GUAVA, KIWI, LEMON, LIME, ONION, ORANGE, PEACH, PEAR, PITAYA, PLUM, POTATO, RASPBERRY, STRAWBERRY, SWEETPOTATO, TOMATOES, WATERMELON]

export default FVIClasses
