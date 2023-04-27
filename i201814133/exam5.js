let persons = [
  { name: "홍길동", age: 16 },
  { name: "임꺽정", age: 17 },
  { name: "전우치", age: 18 },
  { name: "성춘향", age: 19 },
];

let a1 = [];
let a2 = [];
for (let i = 0; i < persons.length; i++) {
  if (persons[i].age % 2 == 0) {
    a2.push(persons[i]);
  } else {
    a1.push(persons[i]);
  }
}
console.log(a1);
console.log(a2);
