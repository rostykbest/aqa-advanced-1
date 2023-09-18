const users = [
  {
    name: "Ross",
    email: "ross@gmail.com",
    age: 20,
  },
  {
    name: "Sofi",
    email: "sofi@gmail.com",
    age: 30,
  },
];
for (const user of users) {
  console.log(user);
}
for (const { name, email, age } of users) {
  console.log(`${name} is ${age} years old and email is ${email}`);
}
