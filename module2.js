/*
function fullname(first,last='dos valo aco'){
    const full = first+ ' ' + last;
    console.log(full)
    return full;   

}

 fullname('shakhawat')

 */

 /*
const name = 'jaan';
const love = 'pakhi';
const greed = 'kmon aco';

const result = name + ' ' + love + ' ' + greed;
console.log(result);

 */

/*
const a= 12;
const b= 12;
// const sum = 'sum is fast'+ a + ' last ' + b + 'total Numbar'  + a + b ;

const math = ` aj ke ami soynel ar dokane ${a} tk furuli khaici ${b} tk bari anci`
console.log(math);
*/
// function expresson
/*
const add=function(a,b){
    return a + b;
}
console.log(add(12,3))
*/
/*
const add=(a,b)=> a + b;
const numbar= (num1,num2,num3,num4) => num1 + num2 + ( num3 * num4);

console.log(numbar(10,11,23,24,))

console.log(add(12,12))

*/
/*

const mul = multiply(2,3);
console.log(mul)
*/

// single peramiter
/*
const deffirent = (x,y) => x - y ;
const friend = (fast ,secend ,thered) => fast * secend * thered;
const getAge = (parcon) => parcon.age;
const student = {name: 'anatana',age:45};
const age = getAge(student);
console.log(age)

const  thraed = numbar => numbar[1];
const getThrade = thraed([23,4,312,4,34,23,]);
console.log(getThrade)

const single = numbar => numbar * 2;
console.log(single(5))

// no peramiter
const paimane = () => Math.PI;
console.log(paimane())

const numbar = (x,y,z) =>{
    const sum = x + y + z;
    const gun = x * y * z;
    const result = sum + gun;
    return result;

}
    */

// console.log(numbar(4,3,5));

/*
const numbar = [12,32,534,43,45,5,4,3,35,5,6,34,];

const math = Math.max(...numbar);
console.log(math)

const num = [23,42,32,121,12,];
const numbr = num;
numbr.push(121212)
console.log(...numbr)

*/
/*
const actor ={
    name : 'shakhawat',
    age : 23,
    phone:'01749888203',
    money : 233422343
}
const {name,age,phone,money} = actor;


// const name = actor.name;
// const age = actor.age;
// const phone  = actor.phone;
// const money = actor.money;
console.log(name)
console.log(age)
console.log(phone)
console.log(money)
*/
/*

function dieffrent(a,b){
    return [a*2,b*2];
}
const [prothom , ditiyo]= dieffrent(5,2);
console.log(prothom , ditiyo)

function dobuletime(a,b,c,){
    return [a*2,b*4,c*5];
}
const [numbara,numbarb,numbarc] = dobuletime(2,4,5,);
console.log(numbara,numbarb,numbarc)
*/
/*

const jone ={
    name: 'shakhawat',
    class: 12,
    color: 'blcak',
    gram:'chirirbandar'
}

const kesy = Object.keys(jone);
console.log(kesy)

const values = Object.values(jone);
console.log(values)

const par = Object.entries(jone);
console.log(par)
*/

const form ={
    name: 'king khan',
    roll: 1,
    result : 'A+',
    color: 'green'
}

// const num = Object.keys(form);
// console.log(num);
// const num1 = Object.values(form);
// console.log(num1);
// const num2 = Object.entries(form);
// console.log(num2);

// const {roll,...hi} = form
// console.log(hi)

// Object.freeze(from);
// from.color=2343;
// console.log(from);


for(let key in form){
    const value = form[key]
    console.log(value)
}

const obejct = Object.keys(form);
console.log(obejct)

function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));

const {x, y, z} = {x: 1, y1: 2, z: 3};
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);