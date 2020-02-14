import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([2, -2, 10, 0]);
numbersCollection.sort();
console.log(numbersCollection);
const charactersCollection = new CharactersCollection('OAqPwcZj');
charactersCollection.sort();
console.log(charactersCollection);
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
