import { dog } from './src/dog'
import { fox } from './src/fox'
import growl from './src/func'

console.log(`${dog.name} is a fox? ${dog.isFox}`)
growl(dog.phrase)

console.log(`${fox.name} is a fox? ${fox.isFox}`)
growl(fox.phrase)
