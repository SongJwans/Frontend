let a = [];
a[0] = { name: "홍길동", age: 16 };
a[1] = a[0];
a[2] = { name: "임꺽정", age: 18 };

let p1 = a[0];
let p2 = a[2];

console.log(p1);
console.log(p2);
console.log(a);
