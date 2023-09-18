const person = {
  firstname: "Ronny",
  lastname: "Osallivan",
  age: 52,
};
person.email = "ronny.sal@gmail.com";
delete person.age;
console.log(person);
