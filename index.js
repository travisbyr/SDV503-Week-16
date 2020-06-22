// Function generator
function* generatorFunction() {}
console.log(generatorFunction());

function* genFunc() {
  yield "1"; // Yield = paused
  console.log("First log");
  yield "2";
  console.log("Second log");
  return "Done!";
}

const genObj = genFunc();
console.log(genObj);
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

function* getEmojis() {
  yield "a";
  yield "b";
  yield "c";
  yield "d";
  yield "e";
}

const genObj2 = getEmojis();
console.log(...genObj2);

for (let item of getEmojis()) {
  console.log(item);
}

const array = ["1", "2", "3"];

const string = "I love Javascript";

const object = { name: "Lydia Hallie" };

function regularFunction() {
  return "I am a basic function";
}

function* generatorFunction() {
  return "I am a generator function";
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());

console.log(object[Symbol.iterator]);

console.log([object]);

object[Symbol.iterator] = function* () {
  yield Object.keys(this);
};
//console.log([...object])

const emojis = ["a", "b", "c"];

function* genFunc() {
  yield "1";
  yield* "2";
  yield "3";
}

console.log([...genFunc()]);

function* generatorFunction() {
  const second = yield "First!";
  console.log(second);
  return "All Done!";
}

console.log(generatorFunction().next());

const bookClubs = [
  {
    name: "The Cool Club",
    clubMembers: [
      {
        name: "John Dow",
        books: [
          { id: "hs891", title: "A Perfect" },
          { id: "ey812", title: "A Good Book" },
        ],
      },
    ],
  },
  {
    name: "The Better Club",
    clubMembers: [
      {
        name: "Jane Doe",
        books: [
          { id: "u8291", title: "A Great Book" },
          { id: "p9201", title: "A Nice Book" },
        ],
      },
    ],
  },
];

function* iterateBooks(books) {
  for (let i = 0; i < books.length; i++) {
    yield books[i];
  }
}

function* iterateMembers(members) {
  for (let i = 0; i < members.length; i++) {
    const clubMember = members[i];
    yield* iterateBooks(clubMember.books);
  }
}

function* iterateBookClubs(clubs) {
  for (let i = 0; i < clubs.length; i++) {
    const bookClub = clubs[i];
    yield* iterateMembers(bookClub.clubMembers);
  }
}
var bookclub = iterateBookClubs(bookClubs)
console.log(bookclub.next());
