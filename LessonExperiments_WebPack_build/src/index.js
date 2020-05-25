import {MyNewClass} from "./hello_lesson_14.js";
import Counter from "./counter";

const mnc = new MyNewClass();
const cnt = new Counter(Math.round(Math.random() * 10));

console.log(cnt.getCounter());

cnt.increment();
console.log(cnt.getCounter());

cnt.decrement();
console.log(cnt.getCounter());