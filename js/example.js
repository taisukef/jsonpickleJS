import * as jsonpickle from "./index.js";

const tags = jsonpickle.tags;

const Thing = function (x) {
   this.x = x;
   this[tags.PY_CLASS] = '__main__.Thing';
   this.subThing = undefined;
   this.subList = [];
}

const firstThing = new Thing(5);
const secondThing = new Thing('hello');
firstThing.subList = [5, 'a', secondThing];
secondThing.subThing = firstThing;
firstThing.subThing = secondThing;
firstThing.subThing2 = secondThing;
const encodeOutput = jsonpickle.encode(firstThing);
console.log(encodeOutput);

const original = jsonpickle.decode(encodeOutput);
console.log(original);

const fn = "../xy_00.pickle";
const bin = await Deno.readFile(fn);
console.log(bin);
const d = jsonpickle.decode(bin);
console.log(d);
