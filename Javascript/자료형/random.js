const Max = 5;
const Min = 2;
for (let i = 0; i < 20; i++) {
  let a = Math.floor(Math.random() * (Max - Min + 1) + Min);
  console.log(a);
}
