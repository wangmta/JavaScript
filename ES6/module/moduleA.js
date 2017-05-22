/*import {greet,GreetMessage} from './moduleB.js'

greet("hello there");

let gm = new GreetMessage();

// don't need to call this, this will be called by default. gm.constructor();
gm.greet();*/

// default import
// since there is only one default, the name could be anything
/*import name from './moduleB.js'

console.log(name);*/

// can also provide alias
import {default as fn} from './moduleB.js'
console.log(fn);
