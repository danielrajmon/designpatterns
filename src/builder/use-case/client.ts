import DirectorCastle from './director-castle';
import DirectorFlat from './director-flat';

const castle = DirectorCastle.construct();
const flat = DirectorFlat.construct();

console.log(castle.construction());
console.log(flat.construction());
